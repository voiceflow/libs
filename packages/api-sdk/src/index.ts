import * as s from 'superstruct';

import { Client } from '@/client';
import type { FetchConfig } from '@/fetch';
import { PublicClient } from '@/publicclient';

export type { Client } from '@/client';
export * from '@/models';
export type { PublicClient } from '@/publicclient';
export type { AnyRecord, ArrayElement, Flatten, Nullable, UnknownRecord } from '@/types';

export const SParams = s.object({
  clientKey: s.string(),
  apiEndpoint: s.string(),
});

export type Options = { options?: FetchConfig };
export type Params = s.StructType<typeof SParams> & Options;

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

  public generatePublicClient({ options }: Options = {}): PublicClient {
    return new PublicClient({
      options,
      clientKey: this.clientKey,
      apiEndpoint: this.apiEndpoint,
    });
  }

  public generateClient({ authorization, options }: s.StructType<typeof SGenerateClientParams> & Options): Client {
    s.assert({ authorization }, SGenerateClientParams);

    return new Client({
      clientKey: this.clientKey,
      options,
      apiEndpoint: this.apiEndpoint,
      authorization,
    });
  }
}

export default ApiSDK;
