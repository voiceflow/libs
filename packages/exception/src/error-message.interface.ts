import type { BaseError } from './base-error.interface';

export interface DetailedErrorMessage extends BaseError {
  cause?: unknown;
}

export type ErrorMessage = string | Error | DetailedErrorMessage;
