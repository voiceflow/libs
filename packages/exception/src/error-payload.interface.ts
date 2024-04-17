import type { BaseError } from './base-error.interface';

export interface ErrorPayload extends BaseError {
  /**
   * standard HTTP status code
   */
  statusCode: number;
  /**
   * textual representation of HTTP status code
   */
  statusText: string;
  /**
   * message from the internal error that caused the error response
   */
  cause?: string;
}
