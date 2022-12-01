import { ClientException } from '@voiceflow/exception';

import { ClientConfiguration } from './client-configuration.interface';
import { FetchAPI, FetchOptions, FetchResponse } from './fetch.interface';
import { HTTPMethod } from './http-method.enum';
import { RequestOptions } from './request-options.interface';

export class FetchClient<Opts extends FetchOptions<any, any> = RequestInit, Req = URL | Request, Res extends FetchResponse = Response> {
  static extractHeaders(headers: FetchOptions<any, any>['headers']) {
    if (headers instanceof Map) return new Map(headers);

    return new Map(Object.entries(headers));
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
      this.config = fetchOrConfig ?? {};
    }
  }
  /* eslint-enable lines-between-class-members */

  private async send(url: string | Req, rawOptions: RequestOptions<Opts>) {
    const { json, ...options } = rawOptions;

    const headers = new Map(options.headers && FetchClient.extractHeaders(options.headers));
    let { body } = options;

    if (json != null) {
      headers.set('content-type', 'application/json');
      body = JSON.stringify(json);
    }

    const finalURL = typeof url === 'string' ? `${this.config.baseURL ?? ''}${url}` : url;
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
      const response = this.send(url, { ...options, method } as RequestOptions<Opts>);

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
