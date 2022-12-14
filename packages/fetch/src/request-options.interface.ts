import { FetchOptions } from './fetch.interface';

export interface ExtraOptions {
  json?: any;
  headers?: Record<string, string> | Map<string, string>;
  query?: URLSearchParams | [string, string][] | Record<string, string> | Map<string, string> | undefined;
}

export type RequestOptions<Opts extends FetchOptions<any, any>> = Omit<Partial<Opts>, keyof ExtraOptions> & ExtraOptions;
