import type { BaseError } from './base-error.interface';
import { ClientException } from './client.exception';
import type { ErrorCode } from './error-code.enum';
import type { ErrorMessage } from './error-message.interface';

type UndefinedPartial<T> = {
  [K in keyof T]?: T[K] | undefined;
};

const isObject = (value: unknown): value is object => !!value && typeof value === 'object';
const hasProperty = (obj: object, key: string): obj is Record<typeof key, unknown> =>
  Object.prototype.hasOwnProperty.call(obj, key);
const isErrorLike = (error: unknown): error is { message: string } =>
  isObject(error) && hasProperty(error, 'message') && typeof error.message === 'string';

export class InternalException extends Error implements BaseError {
  public static instanceOf(err: any): err is InternalException {
    return err instanceof InternalException;
  }

  public static extractData(msg?: ErrorMessage): InternalException.ErrorData {
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
    } else if (msg && typeof msg === 'object') {
      message = msg.message;
      details = msg.details;
      errorCode = msg.errorCode;
      if (msg.cause instanceof Error || typeof msg.cause === 'string') {
        cause = msg.cause;
      } else if (isErrorLike(msg.cause)) {
        cause = msg.cause.message;
      }
    }

    return {
      message,
      details,
      errorCode,
      cause,
    };
  }

  public name: string;

  public cause?: string | Error;

  public errorCode?: ErrorCode;

  public details?: unknown;

  constructor(msg?: ErrorMessage) {
    const data = InternalException.extractData(msg);

    super(data.message);
    this.name = this.constructor.name;
    if (data.details) this.details = data.details;
    if (data.errorCode) this.errorCode = data.errorCode;
    if (data.cause) this.cause = data.cause;
  }

  public getCause() {
    if (typeof this.cause === 'string') return this.cause;
    if (this.cause instanceof Error) return this.cause.message;
    return undefined;
  }

  public is<Details>(code: ErrorCode): this is { details: Details } {
    return this.errorCode === code;
  }
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace InternalException {
  export interface ErrorData extends UndefinedPartial<BaseError> {
    cause?: string | Error | undefined;
  }
}
