import { BaseError } from './base-error.interface';

export interface DetailedErrorMessage extends BaseError {
  cause?: Error;
}

export type ErrorMessage = string | Error | DetailedErrorMessage;
