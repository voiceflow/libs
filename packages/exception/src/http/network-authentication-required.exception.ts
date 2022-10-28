import { ErrorMessage } from '@exception/error-message.interface';

import { HTTPException } from './http.exception';
import { HTTPStatus } from './http-status.enum';

export class NetworkAuthenticationRequiredException extends HTTPException {
  constructor(message?: ErrorMessage) {
    super(HTTPStatus.NETWORK_AUTHENTICATION_REQUIRED, 'Network Authentication Required', message);
  }
}
