import { Result } from './result.interface';

/** The result of a user trying to consume too many requests and being rate-limited. */
export interface TooManyRequests extends Result {
  kind: 'too-many-requests';

  /** The number of seconds an API consumer should wait before sending another request. */
  retryAfterSeconds: number;
}
