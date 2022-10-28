import { ErrorMessage } from '@exception/error-message.interface';

import { HTTPException } from './http.exception';
import { HTTPStatus } from './http-status.enum';

export class LoopDetectedException extends HTTPException {
  constructor(message?: ErrorMessage) {
    super(HTTPStatus.LOOP_DETECTED, 'Loop Detected', message);
  }
}
