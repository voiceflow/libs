import type { BaseResponse } from '@voiceflow/exception';

export interface FetchOptions<Headers, Body> {
  method?: string;
  headers?: [string, string][] | Record<string, string> | Headers;
  body?: string | Body;
}

export interface FetchResponse extends BaseResponse {
  ok: boolean;
  json: () => Promise<any>;
}

export type FetchAPI<Opts extends FetchOptions<any, any>, Req, Res extends FetchResponse> = (
  input: string | Req,
  init?: Opts
) => Promise<Res>;
