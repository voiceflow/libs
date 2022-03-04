import * as pkg from '@nestjs-timeout/index';
import { TimeoutInterceptor } from '@nestjs-timeout/timeout/timeout.interceptor';
import { TimeoutModule } from '@nestjs-timeout/timeout/timeout.module';
import { expect } from 'chai';

describe('index', () => {
  it('should export TimeoutModule', () => {
    expect(pkg.TimeoutModule).to.eq(TimeoutModule);
  });

  it('should export TimeoutInterceptor', () => {
    expect(pkg.TimeoutInterceptor).to.eq(TimeoutInterceptor);
  });
});
