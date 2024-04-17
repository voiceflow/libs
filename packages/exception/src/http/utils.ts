import type { ErrorMessage } from '@exception/error-message.interface';

import { HTTPException } from './http.exception';
import type { HTTPStatus } from './http-status.enum';

const WHITESPACE_PATTERN = /\s+/g;

export interface HTTPExceptionClass {
  new (message?: ErrorMessage): HTTPException;
}

export const createHTTPException = (statusCode: HTTPStatus, statusText: string): HTTPExceptionClass => {
  class NamedHTTPException extends HTTPException {
    constructor(message?: ErrorMessage) {
      super(statusCode, statusText, message);
    }
  }

  Object.defineProperty(NamedHTTPException, 'name', {
    value: `${statusText.replace(WHITESPACE_PATTERN, '')}Exception`,
  });

  return NamedHTTPException;
};
