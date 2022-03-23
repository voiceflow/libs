import { DynamicModule, Module } from '@nestjs/common';

import { Providers } from './constants';
import { RedisService } from './redis.service';
import { RedisHealthIndicator } from './redis.health';
import { RedisModuleAsyncOptions, RedisConnection } from './interfaces/options.interface';

@Module({})
export class RedisModule {
  static forRoot(connection: RedisConnection): DynamicModule {
    return {
      global: true,
      module: RedisModule,
      providers: [{ provide: Providers.REDIS_CONNECTION, useValue: connection }, RedisService, RedisHealthIndicator],
      exports: [RedisHealthIndicator, RedisService, Providers.REDIS_OPTIONS],
    };
  }

  static forRootAsync(options: RedisModuleAsyncOptions): DynamicModule {
    if (options.useFactory) {
      return {
        global: true,
        module: RedisModule,
        imports: options.imports,
        providers: [
          {
            provide: Providers.REDIS_OPTIONS,
            useFactory: options.useFactory,
            inject: options.inject ?? [],
          },
          RedisService.connectionFactory,
          RedisService,
          RedisHealthIndicator,
          ...(options.providers ?? []),
        ],
        exports: [RedisHealthIndicator, RedisService, Providers.REDIS_OPTIONS],
      };
    }

    if (options.useClass) {
      return {
        global: true,
        module: RedisModule,
        imports: options.imports,
        providers: [
          {
            provide: Providers.REDIS_OPTIONS,
            useClass: options.useClass,
            inject: options.inject ?? [],
          },
          RedisService.connectionFactory,
          RedisService,
          RedisHealthIndicator,
          ...(options.providers ?? []),
        ],
        exports: [RedisHealthIndicator, RedisService, Providers.REDIS_OPTIONS],
      };
    }

    throw new RangeError('Expected a useExisting, useFactory, or useClass value to be present in the options');
  }
}
