import { ErrorMessage } from '@exception/error-message.interface';

import { HTTPException } from './http.exception';
import { HTTPStatus } from './http-status.enum';

export class ConflictException extends HTTPException {
  constructor(message?: ErrorMessage) {
    super(HTTPStatus.CONFLICT, 'Conflict', message);
  }
}
