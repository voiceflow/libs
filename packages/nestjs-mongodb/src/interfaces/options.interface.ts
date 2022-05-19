import { ModuleMetadata, Type } from '@nestjs/common';

export interface MongoOptions {
  url: string;
}

export interface MongoModuleAsyncOptions extends Pick<ModuleMetadata, 'providers' | 'imports'> {
  useClass?: Type<MongoOptions>;
  useFactory?: (...args: any[]) => PromiseLike<MongoOptions> | string;
  useValue?: MongoOptions;
  inject?: any[];
}
