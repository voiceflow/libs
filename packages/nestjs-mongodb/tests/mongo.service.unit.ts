import { Provider } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Providers } from '@nestjs-mongodb/constants';
import { MongoConnection, MongoOptions } from '@nestjs-mongodb/interfaces/options.interface';
import { MongoService } from '@nestjs-mongodb/mongo.service';
import { expect } from 'chai';

describe('MongoService', () => {
  it('works providing a connection', async () => {
    const connectionProvider: Provider<MongoConnection> = {
      provide: Providers.MONGO_CONNECTION,
      useValue: {
        db: () => ({}),
      } as MongoConnection,
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [connectionProvider, MongoService],
    }).compile();

    const service = module.get<MongoService>(MongoService);
    expect(service).to.be.instanceOf(MongoService);
  });
});
