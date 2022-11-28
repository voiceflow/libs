import { FetchOptions } from './fetch.interface';

interface ExtraOptions {
  json?: any;
  headers?: Record<string, string>;
}

export type RequestOptions<Opts extends FetchOptions<any, any>> = Omit<Partial<Opts>, keyof ExtraOptions> & ExtraOptions;
