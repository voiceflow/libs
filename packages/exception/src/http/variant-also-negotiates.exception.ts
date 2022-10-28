import { ErrorMessage } from '@exception/error-message.interface';

import { HTTPException } from './http.exception';
import { HTTPStatus } from './http-status.enum';

export class VariantAlsoNegotiatesException extends HTTPException {
  constructor(message?: ErrorMessage) {
    super(HTTPStatus.VARIANT_ALSO_NEGOTIATES, 'Variant Also Negotiates', message);
  }
}
