import { DynamicModule, Module } from '@nestjs/common';

import { Providers } from './constants';
import { RedisConnection, RedisModuleAsyncOptions } from './interfaces/options.interface';
import { RedisHealthIndicator } from './redis.health';
import { RedisService } from './redis.service';

@Module({})
export class RedisModule {
  static forRoot(connection: RedisConnection): DynamicModule {
    return {
      global: true,
      module: RedisModule,
      providers: [{ provide: Providers.REDIS_CONNECTION, useValue: connection }, RedisService, RedisHealthIndicator],
      exports: [RedisHealthIndicator, RedisService],
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
        exports: [RedisHealthIndicator, RedisService],
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
        exports: [RedisHealthIndicator, RedisService],
      };
    }

    if (options.useValue) {
      return {
        global: true,
        module: RedisModule,
        imports: options.imports,
        providers: [
          {
            provide: Providers.REDIS_OPTIONS,
            useValue: options.useValue,
            inject: options.inject ?? [],
          },
          RedisService.connectionFactory,
          RedisService,
          RedisHealthIndicator,
          ...(options.providers ?? []),
        ],
        exports: [RedisHealthIndicator, RedisService],
      };
    }

    throw new RangeError('Expected a useValue, useFactory, or useClass value to be present in the options');
  }
}
