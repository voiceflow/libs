import { ErrorMessage } from '@exception/error-message.interface';

import { HTTPException } from './http.exception';
import { HTTPStatus } from './http-status.enum';

export class PayloadTooLargeException extends HTTPException {
  constructor(message?: ErrorMessage) {
    super(HTTPStatus.PAYLOAD_TOO_LARGE, 'Payload Too Large', message);
  }
}
