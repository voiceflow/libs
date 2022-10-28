import { ErrorMessage } from '@exception/error-message.interface';

import { HTTPException } from './http.exception';
import { HTTPStatus } from './http-status.enum';

export class LockedException extends HTTPException {
  constructor(message?: ErrorMessage) {
    super(HTTPStatus.LOCKED, 'Locked', message);
  }
}
