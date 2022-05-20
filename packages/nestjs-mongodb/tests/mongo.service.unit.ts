import { Provider } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Providers } from '@nestjs-mongodb/constants';
import { MongoService } from '@nestjs-mongodb/mongo.service';
import { expect } from 'chai';
import { MongoClient } from 'mongodb';

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
    expect(service).to.be.instanceOf(MongoService);
  });
});
