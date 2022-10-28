import { ErrorMessage } from '@exception/error-message.interface';

import { HTTPException } from './http.exception';
import { HTTPStatus } from './http-status.enum';

export class LengthRequiredException extends HTTPException {
  constructor(message?: ErrorMessage) {
    super(HTTPStatus.LENGTH_REQUIRED, 'Length Required', message);
  }
}
