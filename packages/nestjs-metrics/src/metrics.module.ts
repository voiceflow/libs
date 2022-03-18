import { DynamicModule, Module } from '@nestjs/common';

import { Providers } from './constants';
import { MetricsModuleAsyncOptions, MetricsOptions } from './interfaces/metrics-options.interface';
import { MetricsService } from './metrics.service';

@Module({})
export class MetricsModule {
  static forRoot(options: MetricsOptions): DynamicModule {
    return {
      global: true,
      module: MetricsModule,
      providers: [{ provide: Providers.OPTIONS, useValue: options }, MetricsService],
      exports: [MetricsService, Providers.OPTIONS],
    };
  }

  static forRootAsync(options: MetricsModuleAsyncOptions): DynamicModule {
    if (options.useFactory) {
      return {
        global: true,
        module: MetricsModule,
        imports: options.imports,
        providers: [
          {
            provide: Providers.OPTIONS,
            useFactory: options.useFactory,
            inject: options.inject ?? [],
          },
          MetricsService,
          ...(options.providers ?? []),
        ],
        exports: [MetricsService, Providers.OPTIONS],
      };
    }

    if (options.useClass) {
      return {
        global: true,
        module: MetricsModule,
        imports: options.imports,
        providers: [
          {
            provide: Providers.OPTIONS,
            useClass: options.useClass,
            inject: options.inject ?? [],
          },
          MetricsService,
          ...(options.providers ?? []),
        ],
        exports: [MetricsService, Providers.OPTIONS],
      };
    }

    throw new RangeError('Expected a useExisting, useFactory, or useClass value to be present in the options');
  }
}
