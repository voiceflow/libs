import { Inject, Injectable, OnModuleDestroy, Provider } from '@nestjs/common';
import { Db, MongoClient } from 'mongodb';

import { Providers } from './constants';
import { MongoOptions } from './interfaces/options.interface';

@Injectable()
export class MongoService implements OnModuleDestroy {
  public readonly db: Db;

  static connectionFactory: Provider<Promise<MongoClient>> = {
    provide: Providers.MONGO_CONNECTION,
    useFactory: async (options: MongoOptions): Promise<MongoClient> => {
      return MongoClient.connect(options.url);
    },
    inject: [{ token: Providers.MONGO_OPTIONS, optional: false }],
  };

  constructor(@Inject(Providers.MONGO_CONNECTION) private readonly client: MongoClient) {
    this.db = client.db();
  }

  async onModuleDestroy(): Promise<void> {
    return this.client.close();
  }
}
