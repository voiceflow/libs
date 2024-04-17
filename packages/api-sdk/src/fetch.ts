import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import axios from 'axios';

export interface FetchConfig {
  headers?: Record<string, string>;
}

interface FetchOptions {
  options?: FetchConfig;
  clientKey: string;
  apiEndpoint: string;
  authorization?: string;
}

interface FetchReturnType<T> {
  data: T;
  status: number;
}

export type PathVariables = Record<string, string | number>;

class Fetch {
  private axios: AxiosInstance;

  constructor({ options, clientKey, apiEndpoint, authorization }: FetchOptions) {
    const config: AxiosRequestConfig = {
      baseURL: apiEndpoint.endsWith('/') ? apiEndpoint : `${apiEndpoint}/`,
      headers: { ...options?.headers, clientKey, ...(authorization ? { authorization } : {}) },
      withCredentials: true,
    };

    this.axios = axios.create(config);
  }

  public async get<T>(url: string): Promise<FetchReturnType<T>> {
    const { data, status } = await this.axios.get<T>(url);

    return { data, status };
  }

  public async post<T>(url: string, body?: unknown): Promise<FetchReturnType<T>> {
    const { data, status } = await this.axios.post<T>(url, body);

    return { data, status };
  }

  public async put<T>(url: string, body?: unknown): Promise<FetchReturnType<T>> {
    const { data, status } = await this.axios.put<T>(url, body);

    return { data, status };
  }

  public async patch<T>(url: string, body: unknown, query?: Record<string, string>): Promise<FetchReturnType<T>> {
    const { data, status } = await this.axios.patch<T>(url, body, query ? { params: query } : undefined);

    return { data, status };
  }

  public async delete<T>(url: string): Promise<FetchReturnType<T>> {
    const { data, status } = await this.axios.delete<T>(url);

    return { data, status };
  }

  /**
   * Updates the data by the provided path and value, variables can be used in the path
   * @example
   * // return Promise<number>
   * fetch.granularPatch<number>('/endpoint', 'vendors[$vendorID].skillID', 5678, { vendorID: "234" })
   */
  public async granularPatch<T>(
    url: string,
    path: string,
    value?: T,
    pathVariables?: PathVariables
  ): Promise<FetchReturnType<T>> {
    const { data, status } = await this.axios.patch<T>(url, { path, value, pathVariables });

    return { data, status };
  }

  public setOptions({ headers }: FetchConfig): void {
    const { clientKey, authorization, ...defaultHeaders } = this.axios.defaults.headers.common;

    this.axios.defaults.headers.common = {
      ...defaultHeaders,
      ...headers,
      clientKey,
      authorization,
    };
  }

  public initWithOptions({ headers }: FetchConfig): Fetch {
    const { clientKey, authorization, ...defaultHeaders } = this.axios.defaults.headers.common;

    return new Fetch({
      options: { headers: { ...defaultHeaders, ...headers } },
      clientKey,
      apiEndpoint: this.axios.defaults.baseURL!,
      authorization,
    });
  }
}

export default Fetch;
