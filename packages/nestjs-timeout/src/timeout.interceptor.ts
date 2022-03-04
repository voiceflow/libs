import { CallHandler, ExecutionContext, InternalServerErrorException, NestInterceptor } from '@nestjs/common';
import { Observable, throwError, TimeoutError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';

/**
 * An interceptor that throws an error if a request takes longer than the provided timeout.
 */
// Adapted from https://stackoverflow.com/a/66852766/10808983
export class TimeoutInterceptor<T> implements NestInterceptor<T, T> {
  /**
   * Create a new {@link TimeoutInterceptor}.
   * @param timeoutMs - The number of milliseconds before a request times out
   */
  constructor(private readonly timeoutMs: number) {}

  intercept(_context: ExecutionContext, next: CallHandler<T>): Observable<T> {
    return next.handle().pipe(
      timeout(this.timeoutMs),
      catchError((err: unknown): Observable<never> => {
        if (err instanceof TimeoutError) {
          return throwError(() => new InternalServerErrorException('The server timed out'));
        }
        return throwError(() => err);
      })
    );
  }
}
