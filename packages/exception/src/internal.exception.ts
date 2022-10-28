import { ErrorCode } from './error-code.enum';

export class InternalException extends Error {
  public static instanceOf(err: any): err is InternalException {
    return err instanceof InternalException;
  }

  constructor(message?: string, public code?: ErrorCode) {
    super(message);
  }
}
