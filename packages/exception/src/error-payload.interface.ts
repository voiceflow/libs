import { ErrorCode } from './error-code.enum';

export interface ErrorPayload {
  /**
   * standard HTTP status code
   */
  statusCode: number;
  /**
   * message describing this error
   */
  message: string;
  /**
   * platform-internal error code
   */
  errorCode?: ErrorCode;
  /**
   * message from the internal error that caused the error response
   */
  cause?: string;
  /**
   * additional details attached to the error
   */
  details?: object;
}
