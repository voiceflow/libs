import { ClientException } from '@voiceflow/exception';

import { FetchAPI, FetchOptions, FetchResponse } from './fetch.interface';
import { FetchClientOptions } from './fetch-client-options.interface';
import { HTTPMethod } from './http-method.enum';
import { RequestOptions } from './request-options.interface';

export class FetchClient<Opts extends FetchOptions<any, any> = RequestInit, Req = URL | Request, Res extends FetchResponse = Response> {
  private readonly options: FetchClientOptions;

  private readonly fetch: FetchAPI<Opts, Req, Res> | undefined;

  /* eslint-disable lines-between-class-members */
  constructor(options?: FetchClientOptions);
  constructor(fetch: FetchAPI<Opts, Req, Res>, options?: FetchClientOptions);
  constructor(fetchOrOptions?: FetchAPI<Opts, Req, Res> | FetchClientOptions, options?: FetchClientOptions) {
    if (typeof fetchOrOptions === 'function') {
      this.fetch = fetchOrOptions;
      this.options = options ?? {};
    } else {
      this.options = fetchOrOptions ?? {};
    }
  }
  /* eslint-enable lines-between-class-members */

  private async send(url: string | Req, rawOptions: RequestOptions<Opts>) {
    const { json, ...options } = rawOptions;

    const headers: Record<string, string> = { ...options.headers };
    let { body } = options;

    if (json != null) {
      headers['content-type'] = 'application/json';
      body = JSON.stringify(json);
    }

    const response = await this.raw(`${this.options.baseURL ?? ''}${url}`, { ...options, headers, body } as Opts);

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
