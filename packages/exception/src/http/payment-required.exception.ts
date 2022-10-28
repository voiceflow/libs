import { ErrorMessage } from '@exception/error-message.interface';

import { HTTPException } from './http.exception';
import { HTTPStatus } from './http-status.enum';

export class PaymentRequiredException extends HTTPException {
  constructor(message?: ErrorMessage) {
    super(HTTPStatus.PAYMENT_REQUIRED, 'Payment Required', message);
  }
}
