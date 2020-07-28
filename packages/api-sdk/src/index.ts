import * as s from 'superstruct';

import Client from '@/client';

export type { default as Client } from '@/client';

export * from '@/models';

export const SOptions = s.object({
  clientKey: s.string(),
  apiEndpoint: s.string(),
});

export const SGenerateClientOptions = s.type({
  creatorID: s.string(),
  authorization: s.string(),
});

class ApiSDK {
  private clientKey: string;

  private apiEndpoint: string;

  constructor({ clientKey, apiEndpoint }: s.StructType<typeof SOptions>) {
    s.assert({ clientKey, apiEndpoint }, SOptions);

    this.clientKey = clientKey;
    this.apiEndpoint = apiEndpoint;
  }

  public generateClient({ creatorID, authorization }: s.StructType<typeof SGenerateClientOptions>): Client {
    s.assert({ creatorID, authorization }, SGenerateClientOptions);

    return new Client({
      creatorID,
      clientKey: this.clientKey,
      apiEndpoint: this.apiEndpoint,
      authorization,
    });
  }
}

export default ApiSDK;
