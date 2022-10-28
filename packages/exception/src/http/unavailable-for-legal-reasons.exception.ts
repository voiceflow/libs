import { ErrorMessage } from '@exception/error-message.interface';

import { HTTPException } from './http.exception';
import { HTTPStatus } from './http-status.enum';

export class UnavailableForLegalReasonsException extends HTTPException {
  constructor(message?: ErrorMessage) {
    super(HTTPStatus.UNAVAILABLE_FOR_LEGAL_REASONS, 'Unavailable For Legal Reasons', message);
  }
}
