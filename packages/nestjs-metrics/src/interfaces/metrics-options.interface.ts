import { ModuleMetadata, Type } from '@nestjs/common';

export interface MetricsOptions {
  readonly serviceName: string;
  readonly interval: number;
  readonly port: number;
}

export interface MetricsOptionsFactory {
  createMetricsOptions: () => PromiseLike<MetricsOptions> | MetricsOptions;
}

export interface MetricsModuleAsyncOptions extends Omit<ModuleMetadata, 'useExisting' | 'useClass' | 'useFactory' | 'inject'> {
  useExisting?: Type<MetricsOptionsFactory>;
  useClass?: Type<MetricsOptionsFactory>;
  useFactory?: (...args: any[]) => PromiseLike<MetricsOptions> | MetricsOptions;
  inject?: any[];
}
