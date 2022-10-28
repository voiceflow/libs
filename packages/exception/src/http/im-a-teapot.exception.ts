import { ErrorMessage } from '@exception/error-message.interface';

import { HTTPException } from './http.exception';
import { HTTPStatus } from './http-status.enum';

export class ImATeapotException extends HTTPException {
  constructor(message?: ErrorMessage) {
    super(HTTPStatus.I_AM_A_TEAPOT, "I'm a teapot", message);
  }
}
