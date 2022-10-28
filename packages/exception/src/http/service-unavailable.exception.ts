import { ErrorMessage } from '@exception/error-message.interface';

import { HTTPException } from './http.exception';
import { HTTPStatus } from './http-status.enum';

export class ServiceUnavailableException extends HTTPException {
  constructor(message?: ErrorMessage) {
    super(HTTPStatus.SERVICE_UNAVAILABLE, 'Service Unavailable', message);
  }
}
