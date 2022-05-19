import { DynamicModule, Module } from '@nestjs/common';
import { MongoClient } from 'mongodb';

import { Providers } from './constants';
import { MongoModuleAsyncOptions } from './interfaces/options.interface';
import { MongoHealthIndicator } from './mongo.health';
import { MongoService } from './mongo.service';

@Module({})
export class MongoModule {
  static forRoot(client: MongoClient): DynamicModule {
    return {
      global: true,
      module: MongoModule,
      providers: [{ provide: Providers.MONGO_CONNECTION, useValue: client }, MongoService, MongoHealthIndicator],
      exports: [MongoHealthIndicator, MongoService],
    };
  }

  static forRootAsync(options: MongoModuleAsyncOptions): DynamicModule {
    if (options.useFactory) {
      return {
        global: true,
        module: MongoModule,
        imports: options.imports,
        providers: [
          {
            provide: Providers.MONGO_OPTIONS,
            useFactory: options.useFactory,
            inject: options.inject ?? [],
          },
          MongoService.connectionFactory,
          MongoService,
          MongoHealthIndicator,
          ...(options.providers ?? []),
        ],
        exports: [MongoHealthIndicator, MongoService],
      };
    }

    if (options.useClass) {
      return {
        global: true,
        module: MongoModule,
        imports: options.imports,
        providers: [
          {
            provide: Providers.MONGO_OPTIONS,
            useClass: options.useClass,
            inject: options.inject ?? [],
          },
          MongoService.connectionFactory,
          MongoService,
          MongoHealthIndicator,
          ...(options.providers ?? []),
        ],
        exports: [MongoHealthIndicator, MongoService],
      };
    }

    if (options.useValue) {
      return {
        global: true,
        module: MongoModule,
        imports: options.imports,
        providers: [
          {
            provide: Providers.MONGO_OPTIONS,
            useValue: options.useValue,
            inject: options.inject ?? [],
          },
          MongoService.connectionFactory,
          MongoService,
          MongoHealthIndicator,
          ...(options.providers ?? []),
        ],
        exports: [MongoHealthIndicator, MongoService],
      };
    }

    throw new RangeError('Expected a useValue, useFactory, or useClass value to be present in the options');
  }
}
