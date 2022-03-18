import { DynamicModule, Module, Provider } from '@nestjs/common';

import { Providers } from './constants';
import { MetricsModuleAsyncOptions, MetricsOptions, MetricsOptionsFactory } from './interfaces/metrics-options.interface';
import { MetricsService } from './metrics.service';

@Module({})
export class MetricsModule {
  static register(options: MetricsOptions): DynamicModule {
    return {
      module: MetricsModule,
      providers: [{ provide: Providers.OPTIONS, useValue: options }, MetricsService],
      exports: [MetricsService, Providers.OPTIONS],
    };
  }

  static registerAsync(options: MetricsModuleAsyncOptions): DynamicModule {
    return {
      module: MetricsModule,
      imports: options.imports,
      providers: [...this.createAsyncProviders(options), MetricsService],
      exports: [MetricsService, Providers.OPTIONS],
    };
  }

  private static createAsyncProviders(options: MetricsModuleAsyncOptions): Provider[] {
    if (options.useExisting || options.useFactory) {
      return [this.createAsyncOptionsProvider(options)];
    }

    if (options.useClass) {
      return [
        this.createAsyncOptionsProvider(options),
        {
          provide: options.useClass,
          useClass: options.useClass,
        },
      ];
    }

    throw new RangeError('Expected a useExisting, useFactory, or useClass value to be present in the options');
  }

  private static createAsyncOptionsProvider(options: MetricsModuleAsyncOptions): Provider {
    if (options.useFactory) {
      return {
        provide: Providers.OPTIONS,
        useFactory: options.useFactory,
        inject: options.inject || [],
      };
    }

    if (options.useExisting) {
      return {
        provide: Providers.OPTIONS,
        useFactory: async (optionsFactory: MetricsOptionsFactory) => optionsFactory.createMetricsOptions(),
        inject: [options.useExisting],
      };
    }

    if (options.useClass) {
      return {
        provide: Providers.OPTIONS,
        useFactory: async (optionsFactory: MetricsOptionsFactory) => optionsFactory.createMetricsOptions(),
        inject: [options.useClass],
      };
    }

    throw new RangeError('Expected a useExisting, useFactory, or useClass value to be present in the options');
  }
}
