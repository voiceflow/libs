import { ErrorMessage } from '@exception/error-message.interface';

import { HTTPException } from './http.exception';
import { HTTPStatus } from './http-status.enum';

export class NotAcceptableException extends HTTPException {
  constructor(message?: ErrorMessage) {
    super(HTTPStatus.NOT_ACCEPTABLE, 'Not Acceptable', message);
  }
}
