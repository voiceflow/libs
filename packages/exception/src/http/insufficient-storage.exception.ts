import { ErrorMessage } from '@exception/error-message.interface';

import { HTTPException } from './http.exception';
import { HTTPStatus } from './http-status.enum';

export class InsufficientStorageException extends HTTPException {
  constructor(message?: ErrorMessage) {
    super(HTTPStatus.INSUFFICIENT_STORAGE, 'Insufficient Storage', message);
  }
}
