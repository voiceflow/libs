import type { Result } from './result.interface';

/**
 * The result of successfully consuming a request without exceeding the rate-limit.
 */
export interface Ok extends Result {
  kind: 'ok';

  limit: number;
  limitRemaining: number;
  resetsAt: Date;
}
