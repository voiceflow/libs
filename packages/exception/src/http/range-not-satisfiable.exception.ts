import { ErrorMessage } from '@exception/error-message.interface';

import { HTTPException } from './http.exception';
import { HTTPStatus } from './http-status.enum';

export class RangeNotSatisfiableException extends HTTPException {
  constructor(message?: ErrorMessage) {
    super(HTTPStatus.RANGE_NOT_SATISFIABLE, 'Range Not Satisfiable', message);
  }
}
