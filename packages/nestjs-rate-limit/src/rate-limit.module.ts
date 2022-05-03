import { DynamicModule, Module } from '@nestjs/common';

import { Providers } from './constants';
import { RateLimitModuleAsyncOptions, RateLimitOptions } from './interfaces/rate-limit-options.interface';
import { RateLimitGuard } from './rate-limit.guard';
import { RateLimitService } from './rate-limit.service';

@Module({})
export class RateLimitModule {
  static forRoot(options: RateLimitOptions): DynamicModule {
    return {
      global: true,
      module: RateLimitModule,
      providers: [{ provide: Providers.RATE_LIMIT_OPTIONS, useValue: options }, RateLimitService, RateLimitGuard],
      exports: [RateLimitService, Providers.RATE_LIMIT_OPTIONS, RateLimitGuard],
    };
  }

  static forRootAsync(options: RateLimitModuleAsyncOptions): DynamicModule {
    if (options.useFactory) {
      return {
        global: true,
        module: RateLimitModule,
        imports: options.imports,
        providers: [
          {
            provide: Providers.RATE_LIMIT_OPTIONS,
            useFactory: options.useFactory,
            inject: options.inject ?? [],
          },
          RateLimitService,
          RateLimitGuard,
          ...(options.providers ?? []),
        ],
        exports: [RateLimitService, Providers.RATE_LIMIT_OPTIONS, RateLimitGuard],
      };
    }

    if (options.useClass) {
      return {
        global: true,
        module: RateLimitModule,
        imports: options.imports,
        providers: [
          {
            provide: Providers.RATE_LIMIT_OPTIONS,
            useClass: options.useClass,
            inject: options.inject ?? [],
          },
          RateLimitService,
          RateLimitGuard,
          ...(options.providers ?? []),
        ],
        exports: [RateLimitService, Providers.RATE_LIMIT_OPTIONS, RateLimitGuard],
      };
    }

    throw new RangeError('Expected a useExisting, useFactory, or useClass value to be present in the options');
  }
}
