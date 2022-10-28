import { ErrorMessage } from '@exception/error-message.interface';

import { HTTPException } from './http.exception';
import { HTTPStatus } from './http-status.enum';

export class BadGatewayException extends HTTPException {
  constructor(message?: ErrorMessage) {
    super(HTTPStatus.BAD_GATEWAY, 'Bad Gateway', message);
  }
}
