import { HTTPStatus } from './http-status.enum';
import { createHTTPException } from './utils';

export const BadRequestException = createHTTPException(HTTPStatus.BAD_REQUEST, 'Bad Request');
export const UnauthorizedException = createHTTPException(HTTPStatus.UNAUTHORIZED, 'Unauthorized');
export const PaymentRequiredException = createHTTPException(HTTPStatus.PAYMENT_REQUIRED, 'Payment Required');
export const ForbiddenException = createHTTPException(HTTPStatus.FORBIDDEN, 'Forbidden');
export const NotFoundException = createHTTPException(HTTPStatus.NOT_FOUND, 'Not Found');
export const MethodNotAllowedException = createHTTPException(HTTPStatus.METHOD_NOT_ALLOWED, 'Method Not Allowed');
export const NotAcceptableException = createHTTPException(HTTPStatus.NOT_ACCEPTABLE, 'Not Acceptable');
export const ProxyAuthenticationRequiredException = createHTTPException(HTTPStatus.PROXY_AUTHENTICATION_REQUIRED, 'Proxy Authentication Required');
export const RequestTimeoutException = createHTTPException(HTTPStatus.REQUEST_TIMEOUT, 'Request Timeout');
export const ConflictException = createHTTPException(HTTPStatus.CONFLICT, 'Conflict');
export const GoneException = createHTTPException(HTTPStatus.GONE, 'Gone');
export const LengthRequiredException = createHTTPException(HTTPStatus.LENGTH_REQUIRED, 'Length Required');
export const PreconditionFailedException = createHTTPException(HTTPStatus.PRECONDITION_FAILED, 'Precondition Failed');
export const PayloadTooLargeException = createHTTPException(HTTPStatus.PAYLOAD_TOO_LARGE, 'Payload Too Large');
export const URITooLongException = createHTTPException(HTTPStatus.URI_TOO_LONG, 'URI Too Long');
export const UnsupportedMediaTypeException = createHTTPException(HTTPStatus.UNSUPPORTED_MEDIA_TYPE, 'Unsupported Media Type');
export const RangeNotSatisfiableException = createHTTPException(HTTPStatus.RANGE_NOT_SATISFIABLE, 'Range Not Satisfiable');
export const ExpectationFailedException = createHTTPException(HTTPStatus.EXPECTATION_FAILED, 'Expectation Failed');
export const ImATeapotException = createHTTPException(HTTPStatus.I_AM_A_TEAPOT, "I'm a teapot");
export const MisdirectedRequestException = createHTTPException(HTTPStatus.MISDIRECTED_REQUEST, 'Misdirected Request');
export const UnprocessableEntityException = createHTTPException(HTTPStatus.UNPROCESSABLE_ENTITY, 'Unprocessable Entity');
export const LockedException = createHTTPException(HTTPStatus.LOCKED, 'Locked');
export const FailedDependencyException = createHTTPException(HTTPStatus.FAILED_DEPENDENCY, 'Failed Dependency');
export const TooEarlyException = createHTTPException(HTTPStatus.TOO_EARLY, 'Too Early');
export const UpgradeRequiredException = createHTTPException(HTTPStatus.UPGRADE_REQUIRED, 'Upgrade Required');
export const PreconditionRequiredException = createHTTPException(HTTPStatus.PRECONDITION_REQUIRED, 'Precondition Required');
export const TooManyRequestsException = createHTTPException(HTTPStatus.TOO_MANY_REQUESTS, 'Too Many Requests');
export const RequestHeaderFieldsTooLargeException = createHTTPException(
  HTTPStatus.REQUEST_HEADER_FIELDS_TOO_LARGE,
  'Request Header Fields Too Large'
);
export const UnavailableForLegalReasonsException = createHTTPException(HTTPStatus.UNAVAILABLE_FOR_LEGAL_REASONS, 'Unavailable For Legal Reasons');
