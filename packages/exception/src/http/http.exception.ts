import { ErrorCode } from '@exception/error-code.enum';
import { ErrorMessage } from '@exception/error-message.interface';
import { ErrorPayload } from '@exception/error-payload.interface';
import { InternalException } from '@exception/internal.exception';

interface VoiceflowErrorData {
  message: string;
  code: ErrorCode | undefined;
  cause: Error | undefined;
  details: object | undefined;
}

export class HTTPException extends Error {
  public name: string;

  public status: number;

  public response: Record<string, any>;

  public cause?: Error;

  private static extractData(statusText: string, messageOrDetails?: ErrorMessage): VoiceflowErrorData {
    let message = statusText;
    let code;
    let details;
    let cause;

    if (typeof messageOrDetails === 'string') {
      message = messageOrDetails;
    } else if (messageOrDetails instanceof Error) {
      cause = messageOrDetails;
      if (InternalException.instanceOf(cause)) {
        code = cause.code;
      }
    } else if (typeof messageOrDetails === 'object') {
      message = messageOrDetails.message;
      code = messageOrDetails.code;
      details = messageOrDetails.details;
      cause = messageOrDetails.error;
    }

    return {
      message,
      code,
      details,
      cause,
    };
  }

  private static createResponse(statusCode: number, { message, code, details, cause }: VoiceflowErrorData): ErrorPayload {
    return {
      statusCode,
      message,

      ...(details && { details }),
      ...(code && { errorCode: code }),
      ...(cause?.message && { cause: cause.message }),
    };
  }

  constructor(statusCode: number, statusText: string, messageOrDetails?: ErrorMessage) {
    const errorData = HTTPException.extractData(statusText, messageOrDetails);
    const response = HTTPException.createResponse(statusCode, errorData);

    super(response.message);

    this.response = response;
    this.status = statusCode;
    this.name = this.constructor.name;
    if (errorData.cause) this.cause = errorData.cause;
  }
}
