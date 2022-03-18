import { ModuleMetadata, Type } from '@nestjs/common';

export interface MetricsOptions {
  readonly serviceName: string;
  readonly interval: number;
  readonly port: number;
}

export interface MetricsModuleAsyncOptions extends Pick<ModuleMetadata, 'providers' | 'imports'> {
  useClass?: Type<MetricsOptions>;
  useFactory?: (...args: any[]) => PromiseLike<MetricsOptions> | MetricsOptions;
  inject?: any[];
}
