import { ClientException } from '@voiceflow/exception';

export type FetchAPI<Request, RequestInit, Response> = (input: string | URL | Request, init?: RequestInit) => Promise<Response>;

export const vfetch: {
  (): FetchAPI<Request, RequestInit, Response>;
  <Request, RequestInit, Response>(fetch: FetchAPI<Request, RequestInit, Response>): FetchAPI<Request, RequestInit, Response>;
} =
  (fetch?: FetchAPI<any, any, any>): FetchAPI<any, any, any> =>
  async (...args) => {
    const response = await (fetch ?? window.fetch)(...args);

    if (!response.ok) {
      throw await new ClientException(response).build();
    }

    return response;
  };
