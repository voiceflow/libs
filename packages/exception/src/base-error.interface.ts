import { ErrorCode } from './error-code.enum';

export interface BaseError {
  /**
   * message describing this error
   */
  message: string;

  /**
   * additional details attached to the error
   */
  details?: object;

  /**
   * platform-internal error code
   */
  errorCode?: ErrorCode;
}
