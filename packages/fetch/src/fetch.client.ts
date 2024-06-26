import { ClientException } from '@voiceflow/exception';

import type { ClientConfiguration } from './client-configuration.interface';
import type { FetchAPI, FetchOptions, FetchResponse } from './fetch.interface';
import { HTTPMethod } from './http-method.enum';
import type { RequestHeaders, RequestOptions, RequestQuery } from './request-options.interface';

export class FetchClient<
  Opts extends FetchOptions<any, any> = RequestInit,
  Req = URL | Request,
  Res extends FetchResponse = Response,
> {
  private static extractHeaders(headers: RequestHeaders | undefined) {
    return new Map(headers instanceof Map ? headers : Object.entries(headers ?? {}));
  }

  private static extractQuery(query: RequestQuery | undefined) {
    return new URLSearchParams(query instanceof Map ? Object.entries(query) : query);
  }

  private static formatURL(baseURL: string | undefined, path: string, query: URLSearchParams) {
    const url = new URL(path, baseURL);
    query.forEach((value, key) => url.searchParams.append(key, value));
    return url.href;
  }

  private readonly config: ClientConfiguration;

  private readonly fetch: FetchAPI<Opts, Req, Res> | undefined;

  /* eslint-disable lines-between-class-members */
  constructor(config?: ClientConfiguration);
  constructor(fetch: FetchAPI<Opts, Req, Res>, options?: ClientConfiguration);
  constructor(fetchOrConfig?: FetchAPI<Opts, Req, Res> | ClientConfiguration, config?: ClientConfiguration) {
    if (typeof fetchOrConfig === 'function') {
      this.fetch = fetchOrConfig;
      this.config = config ?? {};
    } else {
      this.config = fetchOrConfig ?? config ?? {};
    }
  }
  /* eslint-enable lines-between-class-members */

  private async send(url: string | Req, rawOptions: RequestOptions<Opts>) {
    // eslint-disable-next-line prefer-const
    let { json, headers, query, body, ...options } = rawOptions;

    headers = new Map([
      ...FetchClient.extractHeaders(this.config.headers).entries(),
      ...FetchClient.extractHeaders(headers).entries(),
    ]);
    query = FetchClient.extractQuery(query);

    if (json != null) {
      headers.set('content-type', 'application/json');
      body = JSON.stringify(json);
    }

    const finalURL = typeof url === 'string' ? FetchClient.formatURL(this.config.baseURL, url, query) : url;
    const response = await this.raw(finalURL, {
      ...options,
      headers: Object.fromEntries(headers.entries()),
      body,
    } as Opts);

    if (!response.ok) {
      throw await new ClientException(response).build();
    }

    return response;
  }

  private createMethod(method: HTTPMethod) {
    return (url: string | Req, options?: Omit<RequestOptions<Opts>, 'method'>) => {
      const response = this.send(url, { ...options, method: method.toUpperCase() } as RequestOptions<Opts>);

      return Object.assign(response, {
        json: async <T = unknown>(): Promise<T> => (await response).json(),
      });
    };
  }

  public raw(...args: Parameters<FetchAPI<Opts, Req, Res>>): Promise<Res> {
    return (this.fetch ?? (window.fetch as FetchAPI<any, any, any>))(...args);
  }

  public delete = this.createMethod(HTTPMethod.DELETE);

  public get = this.createMethod(HTTPMethod.GET);

  public head = this.createMethod(HTTPMethod.HEAD);

  public patch = this.createMethod(HTTPMethod.PATCH);

  public post = this.createMethod(HTTPMethod.POST);

  public put = this.createMethod(HTTPMethod.PUT);
}
