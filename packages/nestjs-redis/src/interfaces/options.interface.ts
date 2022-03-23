import { ModuleMetadata, Type } from '@nestjs/common';
import type {RedisOptions as IORedisOptions} from 'ioredis';

export interface RedisOptions {
  host: string;
  port: number;
  ioredis?: Omit<IORedisOptions, 'host' | 'port'>;
};

export interface RedisModuleAsyncOptions extends Pick<ModuleMetadata, 'providers' | 'imports'> {
  useClass?: Type<RedisOptions>;
  useFactory?: (...args: any[]) => PromiseLike<RedisOptions> | RedisOptions;
  inject?: any[];
}
