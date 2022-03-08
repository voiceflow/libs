import { isNativeError } from 'util/types';

/**
 * A plain object representation of an Error object.
 */
type PlainError = Pick<Error, keyof Error>;

/**
 * A health-check compatible plain object to represent an error that occurred.
 */
export class HealthCheckErrorDto<T = unknown> {
  readonly error: PlainError | null;

  readonly rawError: T;

  /**
   * Converts any error (doesn't need to be an `Error` object) to a health-check compatible plain object.
   */
  constructor(error: T) {
    if (isNativeError(error)) {
      this.error = {
        name: error.name,
        message: error.message,
      };
      if (error.stack) {
        this.error.stack = error.stack;
      }

      this.rawError = error;
    } else {
      this.error = null;
      this.rawError = error;
    }
  }
}
