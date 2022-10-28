import { ErrorMessage } from '@exception/error-message.interface';

import { HTTPException } from './http.exception';
import { HTTPStatus } from './http-status.enum';

export class RequestHeaderFieldsTooLargeException extends HTTPException {
  constructor(message?: ErrorMessage) {
    super(HTTPStatus.REQUEST_HEADER_FIELDS_TOO_LARGE, 'Request Header Fields Too Large', message);
  }
}
