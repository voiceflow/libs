import { ErrorMessage } from '@exception/error-message.interface';

import { HTTPException } from './http.exception';
import { HTTPStatus } from './http-status.enum';

export class UpgradeRequiredException extends HTTPException {
  constructor(message?: ErrorMessage) {
    super(HTTPStatus.UPGRADE_REQUIRED, 'Upgrade Required', message);
  }
}
