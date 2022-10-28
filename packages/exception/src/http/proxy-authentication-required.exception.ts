import { ErrorMessage } from '@exception/error-message.interface';

import { HTTPException } from './http.exception';
import { HTTPStatus } from './http-status.enum';

export class ProxyAuthenticationRequiredException extends HTTPException {
  constructor(message?: ErrorMessage) {
    super(HTTPStatus.PROXY_AUTHENTICATION_REQUIRED, 'Proxy Authentication Required', message);
  }
}
