import { ErrorMessage } from '@exception/error-message.interface';

import { HTTPException } from './http.exception';
import { HTTPStatus } from './http-status.enum';

export class URITooLongException extends HTTPException {
  constructor(message?: ErrorMessage) {
    super(HTTPStatus.URI_TOO_LONG, 'URI Too Long', message);
  }
}
