import { BaseError } from './base-error.interface';
import { ClientException } from './client.exception';
import { ErrorCode } from './error-code.enum';
import { ErrorMessage } from './error-message.interface';

type UndefinedPartial<T> = {
  [K in keyof T]?: T[K] | undefined;
};

export class InternalException extends Error implements BaseError {
  public static instanceOf(err: any): err is InternalException {
    return err instanceof InternalException;
  }

  protected static extractData(msg?: ErrorMessage): InternalException.ErrorData {
    let message;
    let errorCode;
    let details;
    let cause;

    if (typeof msg === 'string') {
      message = msg;
    } else if (msg instanceof Error) {
      cause = msg;
      if (InternalException.instanceOf(msg) || ClientException.instanceOf(msg)) {
        details = msg.details;
        errorCode = msg.errorCode;
      }
    } else if (typeof msg === 'object') {
      message = msg.message;
      details = msg.details;
      errorCode = msg.errorCode;
      cause = msg.cause;
    }

    return {
      message,
      details,
      errorCode,
      cause,
    };
  }

  public name: string;

  public cause?: Error;

  public errorCode?: ErrorCode;

  public details?: object;

  constructor(msg: ErrorMessage = 'Unexpected Error') {
    const data = InternalException.extractData(msg);

    super(data.message);
    this.name = this.constructor.name;
    if (data.details) this.details = data.details;
    if (data.errorCode) this.errorCode = data.errorCode;
    if (data.cause) this.cause = data.cause;
  }
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace InternalException {
  export interface ErrorData extends UndefinedPartial<BaseError> {
    cause?: Error | undefined;
  }
}
