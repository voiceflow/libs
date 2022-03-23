import { expect } from 'chai';
import { Test, TestingModule } from '@nestjs/testing';
import { Provider } from '@nestjs/common';

import { RedisService } from '@nestjs-redis/redis.service';
import { Providers } from '@nestjs-redis/constants';
import { RedisConnection } from '@nestjs-redis/interfaces/connection.interface';
import { RedisOptions } from '@nestjs-redis/interfaces/options.interface';

describe('RedisService', () => {
  it('exists providing a connection', async () => {
    const connectionProvider: Provider<RedisConnection> = {
      provide: Providers.REDIS_CONNECTION,
      useValue: {} as RedisConnection
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [connectionProvider, RedisService],
    }).compile();

    const service = module.get<RedisService>(RedisService);
    expect(service).to.exist;
  });

  it('exists providing a configuration', async () => {
    const optionsProvider: Provider<RedisOptions> = {
      provide: Providers.REDIS_OPTIONS,
      useValue: {
        host: '',
        port: 0,
        ioredis: {
          lazyConnect: true
        }
      }
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        optionsProvider,
        RedisService.connectionFactory,
        RedisService
      ],
    }).compile();

    const service = module.get<RedisService>(RedisService);
    expect(service).to.exist;
  });
});
