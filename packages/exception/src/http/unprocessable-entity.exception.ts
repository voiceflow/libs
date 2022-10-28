import { ErrorMessage } from '@exception/error-message.interface';

import { HTTPException } from './http.exception';
import { HTTPStatus } from './http-status.enum';

export class UnprocessableEntityException extends HTTPException {
  constructor(message?: ErrorMessage) {
    super(HTTPStatus.UNPROCESSABLE_ENTITY, 'Unprocessable Entity', message);
  }
}
