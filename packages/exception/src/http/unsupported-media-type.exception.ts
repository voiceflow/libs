import { ErrorMessage } from '@exception/error-message.interface';

import { HTTPException } from './http.exception';
import { HTTPStatus } from './http-status.enum';

export class UnsupportedMediaTypeException extends HTTPException {
  constructor(message?: ErrorMessage) {
    super(HTTPStatus.UNSUPPORTED_MEDIA_TYPE, 'Unsupported Media Type', message);
  }
}
