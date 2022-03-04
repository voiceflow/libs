import { TimeoutInterceptor } from '@nestjs-timeout/timeout/timeout.interceptor';
import { expect } from 'chai';

describe('TimeoutInterceptor', () => {
  it('should be defined', () => {
    expect(() => new TimeoutInterceptor(5000)).not.to.throw();
  });
});
