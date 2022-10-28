import { ClientException } from '@voiceflow/exception';

type FetchAPI = WindowOrWorkerGlobalScope['fetch'];

export const vfetch =
  (fetch?: FetchAPI): FetchAPI =>
  async (...args) => {
    const res = await (fetch ?? window.fetch)(...args);

    if (!res.ok) {
      throw new ClientException(res);
    }

    return res;
  };
