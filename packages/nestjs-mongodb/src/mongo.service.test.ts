import { Provider } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MongoClient } from 'mongodb';

import { Providers } from './constants';
import { MongoService } from './mongo.service';

describe('MongoService', () => {
  it('works providing a connection', async () => {
    const connectionProvider: Provider<MongoClient> = {
      provide: Providers.MONGO_CONNECTION,
      useValue: {
        db: () => ({}),
      } as MongoClient,
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [connectionProvider, MongoService, { provide: Providers.MONGO_OPTIONS, useValue: { db: 'test' } }],
    }).compile();

    const service = module.get<MongoService>(MongoService);
    expect(service).toBeInstanceOf(MongoService);
  });
});
