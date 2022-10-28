import { ErrorMessage } from '@exception/error-message.interface';

import { HTTPException } from './http.exception';
import { HTTPStatus } from './http-status.enum';

export class MisdirectedRequestException extends HTTPException {
  constructor(message?: ErrorMessage) {
    super(HTTPStatus.MISDIRECTED_REQUEST, 'Misdirected Request', message);
  }
}
