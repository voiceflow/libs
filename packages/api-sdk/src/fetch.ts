import axios, { AxiosInstance } from 'axios';

type FetchOptions = {
  clientKey: string;
  apiEndpoint: string;
  authorization: string;
};

type FetchReturnType<T> = {
  data: T;
  status: number;
};

class Fetch {
  private axios: AxiosInstance;

  constructor({ clientKey, apiEndpoint, authorization }: FetchOptions) {
    this.axios = axios.create({
      baseURL: apiEndpoint.endsWith('/') ? apiEndpoint : `${apiEndpoint}/`,
      headers: { clientKey, authorization },
    });
  }

  public async get<T extends unknown>(url: string): Promise<FetchReturnType<T>> {
    const { data, status } = await this.axios.get<T>(url);

    return { data, status };
  }

  public async post<T extends unknown>(url: string, body?: unknown): Promise<FetchReturnType<T>> {
    const { data, status } = await this.axios.post<T>(url, body);

    return { data, status };
  }

  public async put<T extends unknown>(url: string, body?: unknown): Promise<FetchReturnType<T>> {
    const { data, status } = await this.axios.put<T>(url, body);

    return { data, status };
  }

  public async patch<T extends unknown>(url: string, body?: unknown): Promise<FetchReturnType<T>> {
    const { data, status } = await this.axios.patch<T>(url, body);

    return { data, status };
  }

  public async delete<T extends unknown>(url: string): Promise<FetchReturnType<T>> {
    const { data, status } = await this.axios.delete<T>(url);

    return { data, status };
  }
}

export default Fetch;
