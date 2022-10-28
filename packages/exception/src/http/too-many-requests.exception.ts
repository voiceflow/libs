import { ErrorMessage } from '@exception/error-message.interface';

import { HTTPException } from './http.exception';
import { HTTPStatus } from './http-status.enum';

export class TooManyRequestsException extends HTTPException {
  constructor(message?: ErrorMessage) {
    super(HTTPStatus.TOO_MANY_REQUESTS, 'Too Many Requests', message);
  }
}
