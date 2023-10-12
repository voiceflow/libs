import { ErrorMessage } from '@exception/error-message.interface';
import { ErrorPayload } from '@exception/error-payload.interface';
import { InternalException } from '@exception/internal.exception';

export interface SerializedHTTPException {
  message: string;
  statusCode: number;
  statusText: string;
}

export class HTTPException extends InternalException implements SerializedHTTPException {
  public static instanceOf(err: any): err is HTTPException {
    return err instanceof HTTPException;
  }

  private static hasRequiredProperties(err: unknown): err is Record<keyof SerializedHTTPException, unknown> {
    return typeof err === 'object' && err !== null && 'statusText' in err && 'message' in err && 'statusCode' in err;
  }

  public static isSerializedInstance(err: unknown): err is SerializedHTTPException {
    return (
      HTTPException.hasRequiredProperties(err) &&
      typeof err.statusText === 'string' &&
      typeof err.message === 'string' &&
      typeof err.statusCode === 'number'
    );
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
