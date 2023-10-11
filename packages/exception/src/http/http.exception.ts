import { ErrorMessage } from '@exception/error-message.interface';
import { ErrorPayload } from '@exception/error-payload.interface';
import { InternalException } from '@exception/internal.exception';

export interface SerializedHTTPException {
  message: string;
  path: string;
  statusCode: number;
  statusText: string;
  timestamp: string;
}

export class HTTPException extends InternalException {
  public static instanceOf(err: any): err is HTTPException {
    return err instanceof HTTPException;
  }

  public static serializedInstanceOf(err: any): err is SerializedHTTPException {
    return typeof err === 'object' && err.statusText && err.message && err.statusCode && err.path && err.timestamp;
  }

  public statusCode: number;

  public statusText: string;

  public response: ErrorPayload;

  constructor(statusCode: number, statusText: string, msg: ErrorMessage = statusText) {
    super(msg);
    this.message ||= statusText;
    this.statusCode = statusCode;
    this.statusText = statusText;
    this.response = this.createResponse();
  }

  public createResponse(): ErrorPayload {
    const cause = this.getCause();

    return {
      message: this.message,
      statusCode: this.statusCode,
      statusText: this.statusText,

      ...(this.details ? { details: this.details } : {}),
      ...(this.errorCode ? { errorCode: this.errorCode } : {}),
      ...(cause ? { cause } : {}),
    };
  }
}
