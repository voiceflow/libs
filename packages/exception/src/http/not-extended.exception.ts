import { ErrorMessage } from '@exception/error-message.interface';

import { HTTPException } from './http.exception';
import { HTTPStatus } from './http-status.enum';

export class NotExtendedException extends HTTPException {
  constructor(message?: ErrorMessage) {
    super(HTTPStatus.NOT_EXTENDED, 'Not Extended', message);
  }
}
