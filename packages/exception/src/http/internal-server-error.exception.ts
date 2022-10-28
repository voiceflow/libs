import { ErrorMessage } from '@exception/error-message.interface';

import { HTTPException } from './http.exception';
import { HTTPStatus } from './http-status.enum';

export class InternalServerErrorException extends HTTPException {
  constructor(message?: ErrorMessage) {
    super(HTTPStatus.INTERNAL_SERVER_ERROR, 'Internal Server Error', message);
  }
}
