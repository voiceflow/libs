import { ErrorMessage } from '@exception/error-message.interface';

import { HTTPException } from './http.exception';
import { HTTPStatus } from './http-status.enum';

export class PreconditionFailedException extends HTTPException {
  constructor(message?: ErrorMessage) {
    super(HTTPStatus.PRECONDITION_FAILED, 'Precondition Failed', message);
  }
}
