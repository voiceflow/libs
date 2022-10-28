import { ErrorMessage } from '@exception/error-message.interface';

import { HTTPException } from './http.exception';
import { HTTPStatus } from './http-status.enum';

export class MethodNotAllowedException extends HTTPException {
  constructor(message?: ErrorMessage) {
    super(HTTPStatus.METHOD_NOT_ALLOWED, 'Method Not Allowed', message);
  }
}
