import type { FetchOptions } from './fetch.interface';

export type RequestHeaders = Record<string, string> | Map<string, string>;

export type RequestQuery = URLSearchParams | [string, string][] | Record<string, string> | Map<string, string>;

export interface ExtraOptions {
  json?: any;
  headers?: RequestHeaders;
  query?: RequestQuery | undefined;
}

export type RequestOptions<Opts extends FetchOptions<any, any>> = Omit<Partial<Opts>, keyof ExtraOptions> &
  ExtraOptions;
