import { ErrorMessage } from '@exception/error-message.interface';

import { HTTPException } from './http.exception';
import { HTTPStatus } from './http-status.enum';

export class ForbiddenException extends HTTPException {
  constructor(message?: ErrorMessage) {
    super(HTTPStatus.FORBIDDEN, 'Forbidden', message);
  }
}
