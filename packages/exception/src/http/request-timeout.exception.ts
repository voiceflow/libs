import { ErrorMessage } from '@exception/error-message.interface';

import { HTTPException } from './http.exception';
import { HTTPStatus } from './http-status.enum';

export class RequestTimeoutException extends HTTPException {
  constructor(message?: ErrorMessage) {
    super(HTTPStatus.REQUEST_TIMEOUT, 'Request Timeout', message);
  }
}
