import { ErrorMessage } from '@exception/error-message.interface';

import { HTTPException } from './http.exception';
import { HTTPStatus } from './http-status.enum';

export class GatewayTimeoutException extends HTTPException {
  constructor(message?: ErrorMessage) {
    super(HTTPStatus.GATEWAY_TIMEOUT, 'Gateway Timeout', message);
  }
}
