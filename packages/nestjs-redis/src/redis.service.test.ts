import type { Provider } from '@nestjs/common';
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { describe, expect, it } from 'vitest';

import { Providers } from './constants';
import type { RedisConnection, RedisOptions } from './interfaces/options.interface';
import { RedisService } from './redis.service';

describe('RedisService', () => {
  it('works providing a connection', async () => {
    const connectionProvider: Provider<RedisConnection> = {
      provide: Providers.REDIS_CONNECTION,
      useValue: {} as RedisConnection,
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [connectionProvider, RedisService],
    }).compile();

    const service = module.get<RedisService>(RedisService);
    expect(service).toBeInstanceOf(RedisService);
  });

  it('works providing a configuration', async () => {
    const optionsProvider: Provider<RedisOptions> = {
      provide: Providers.REDIS_OPTIONS,
      useValue: {
        host: '',
        port: 0,
        ioredis: {
          lazyConnect: true,
        },
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [optionsProvider, RedisService.connectionFactory, RedisService],
    }).compile();

    const service = module.get<RedisService>(RedisService);
    expect(service).toBeInstanceOf(RedisService);
  });
});
