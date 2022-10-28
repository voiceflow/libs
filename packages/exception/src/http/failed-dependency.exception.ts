import { ErrorMessage } from '@exception/error-message.interface';

import { HTTPException } from './http.exception';
import { HTTPStatus } from './http-status.enum';

export class FailedDependencyException extends HTTPException {
  constructor(message?: ErrorMessage) {
    super(HTTPStatus.FAILED_DEPENDENCY, 'Failed Dependency', message);
  }
}
