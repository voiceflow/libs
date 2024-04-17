import { HTTPStatus } from './http-status.enum';
import { createHTTPException } from './utils';

export const InternalServerErrorException = createHTTPException(
  HTTPStatus.INTERNAL_SERVER_ERROR,
  'Internal Server Error'
);
export const NotImplementedException = createHTTPException(HTTPStatus.NOT_IMPLEMENTED, 'Not Implemented');
export const BadGatewayException = createHTTPException(HTTPStatus.BAD_GATEWAY, 'Bad Gateway');
export const ServiceUnavailableException = createHTTPException(HTTPStatus.SERVICE_UNAVAILABLE, 'Service Unavailable');
export const GatewayTimeoutException = createHTTPException(HTTPStatus.GATEWAY_TIMEOUT, 'Gateway Timeout');
export const HTTPVersionNotSupportedException = createHTTPException(
  HTTPStatus.HTTP_VERSION_NOT_SUPPORTED,
  'HTTP Version Not Supported'
);
export const VariantAlsoNegotiatesException = createHTTPException(
  HTTPStatus.VARIANT_ALSO_NEGOTIATES,
  'Variant Also Negotiates'
);
export const InsufficientStorageException = createHTTPException(
  HTTPStatus.INSUFFICIENT_STORAGE,
  'Insufficient Storage'
);
export const LoopDetectedException = createHTTPException(HTTPStatus.LOOP_DETECTED, 'Loop Detected');
export const NotExtendedException = createHTTPException(HTTPStatus.NOT_EXTENDED, 'Not Extended');
export const NetworkAuthenticationRequiredException = createHTTPException(
  HTTPStatus.NETWORK_AUTHENTICATION_REQUIRED,
  'Network Authentication Required'
);
