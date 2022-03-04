import { Module } from '@nestjs/common';

import { TimeoutInterceptor } from './timeout.interceptor';

@Module({
  providers: [TimeoutInterceptor],
  exports: [TimeoutInterceptor],
})
export class TimeoutModule {}
