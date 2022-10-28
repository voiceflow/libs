import { ClientException } from '@voiceflow/exception';

type FetchAPI = WindowOrWorkerGlobalScope['fetch'];

export const vfetch =
  (fetch?: FetchAPI): FetchAPI =>
  async (...args) => {
    const response = await (fetch ?? window.fetch)(...args);

    if (!response.ok) {
      throw await new ClientException(response).build();
    }

    return response;
  };
