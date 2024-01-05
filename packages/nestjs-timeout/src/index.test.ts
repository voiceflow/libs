import * as pkg from '.';
import { TimeoutInterceptor } from './timeout.interceptor';
import { TimeoutModule } from './timeout.module';

describe('index', () => {
  it('should export TimeoutModule', () => {
    expect(pkg.TimeoutModule).toBe(TimeoutModule);
  });

  it('should export TimeoutInterceptor', () => {
    expect(pkg.TimeoutInterceptor).toBe(TimeoutInterceptor);
  });
});
