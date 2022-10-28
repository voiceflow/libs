import { ErrorMessage } from '@exception/error-message.interface';

import { HTTPException } from './http.exception';
import { HTTPStatus } from './http-status.enum';

export class TooEarlyException extends HTTPException {
  constructor(message?: ErrorMessage) {
    super(HTTPStatus.TOO_EARLY, 'Too Early', message);
  }
}
