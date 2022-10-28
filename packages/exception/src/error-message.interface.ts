import { ErrorCode } from './error-code.enum';

export interface ErrorMessageWithDetails {
  message: string;
  details: object;
  code?: ErrorCode;
  error?: Error;
}

export type ErrorMessage = string | Error | ErrorMessageWithDetails;
