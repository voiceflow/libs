import { ErrorMessage } from '@exception/error-message.interface';

import { HTTPException } from './http.exception';
import { HTTPStatus } from './http-status.enum';

export class ExpectationFailedException extends HTTPException {
  constructor(message?: ErrorMessage) {
    super(HTTPStatus.EXPECTATION_FAILED, 'Expectation Failed', message);
  }
}
