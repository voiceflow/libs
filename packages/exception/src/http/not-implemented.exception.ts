import { ErrorMessage } from '@exception/error-message.interface';

import { HTTPException } from './http.exception';
import { HTTPStatus } from './http-status.enum';

export class NotImplementedException extends HTTPException {
  constructor(message?: ErrorMessage) {
    super(HTTPStatus.NOT_IMPLEMENTED, 'Not Implemented', message);
  }
}
