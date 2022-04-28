import { ModuleMetadata, Type } from '@nestjs/common';

import { TokenExtractor } from './token-extractor.interface';

export interface RateLimitOptions {
  /** The name of the service. */
  readonly serviceName: string;
  readonly points: number;
  readonly duration: number;
  /**
   * The user auth token extractor to use on HTTP requests.
   * Defaults to reading from headers or cookies.
   */
  readonly tokenExtractor?: TokenExtractor;
}

export interface RateLimitModuleAsyncOptions extends Pick<ModuleMetadata, 'providers' | 'imports'> {
  useClass?: Type<RateLimitOptions>;
  useFactory?: (...args: any[]) => PromiseLike<RateLimitOptions> | RateLimitOptions;
  inject?: any[];
}
