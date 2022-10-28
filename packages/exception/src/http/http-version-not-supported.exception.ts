import { ErrorMessage } from '@exception/error-message.interface';

import { HTTPException } from './http.exception';
import { HTTPStatus } from './http-status.enum';

export class HTTPVersionNotSupportedException extends HTTPException {
  constructor(message?: ErrorMessage) {
    super(HTTPStatus.HTTP_VERSION_NOT_SUPPORTED, 'HTTP Version Not Supported', message);
  }
}
