import { describe, expect, it } from 'vitest';

import { TimeoutInterceptor } from './timeout.interceptor';

describe('TimeoutInterceptor', () => {
  it('should be defined', () => {
    expect(() => new TimeoutInterceptor(5000)).not.toThrow();
  });
});
