import { Client } from '@api-sdk/client';
import { ClientOptions, PublicClient } from '@api-sdk/publicclient';
import * as s from 'superstruct';

export type { Client } from '@api-sdk/client';
export type { PublicClient } from '@api-sdk/publicclient';
export type { Flatten } from '@api-sdk/types';

export const SParams = s.object({
  clientKey: s.string(),
  apiEndpoint: s.string(),
});

export type Options = Pick<ClientOptions, 'options' | 'analyticsEncryption'>;

export interface Params extends s.StructType<typeof SParams>, Options {}

export const SGenerateClientParams = s.type({
  authorization: s.string(),
});

class ApiSDK {
  private clientKey: string;

  private apiEndpoint: string;

  constructor({ clientKey, apiEndpoint }: Params) {
    s.assert({ clientKey, apiEndpoint }, SParams);

    this.clientKey = clientKey;
    this.apiEndpoint = apiEndpoint;
  }

  public generatePublicClient(options: Options = {}): PublicClient {
    return new PublicClient({
      ...options,
      clientKey: this.clientKey,
      apiEndpoint: this.apiEndpoint,
    });
  }

  public generateClient(options: s.StructType<typeof SGenerateClientParams> & Options): Client {
    s.assert({ authorization: options.authorization }, SGenerateClientParams);

    return new Client({
      ...options,
      clientKey: this.clientKey,
      apiEndpoint: this.apiEndpoint,
    });
  }
}

export default ApiSDK;
