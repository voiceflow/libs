import { ErrorMessage } from '@exception/error-message.interface';

import { HTTPException } from './http.exception';
import { HTTPStatus } from './http-status.enum';

export class BadRequestException extends HTTPException {
  constructor(message?: ErrorMessage) {
    super(HTTPStatus.BAD_REQUEST, 'Bad Request', message);
  }
}
