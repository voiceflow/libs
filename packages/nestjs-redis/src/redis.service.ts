import { Inject, Injectable, OnModuleDestroy, Provider } from '@nestjs/common';
import IORedis from 'ioredis';

import { Providers } from './constants';
import { RedisConnection } from './interfaces/connection.interface';
import { RedisOptions } from './interfaces/options.interface';

@Injectable()
export class RedisService implements OnModuleDestroy {
  static connectionFactory: Provider<Promise<RedisConnection>> = {
    inject: [{
      token: Providers.REDIS_OPTIONS,
      optional: false
    }],
    provide: Providers.REDIS_CONNECTION,
    useFactory: async (config: RedisOptions): Promise<RedisConnection> => {
      return new IORedis(config.port, config.host, config.ioredis);
    },
  };

  constructor(@Inject(Providers.REDIS_CONNECTION) public readonly connection: RedisConnection) {}

  async onModuleDestroy(): Promise<void> {
    return this.connection.disconnect();
  }
}
