import { ErrorMessage } from '@exception/error-message.interface';

import { HTTPException } from './http.exception';
import { HTTPStatus } from './http-status.enum';

export class UnauthorizedException extends HTTPException {
  constructor(message?: ErrorMessage) {
    super(HTTPStatus.UNAUTHORIZED, 'Unauthorized', message);
  }
}
