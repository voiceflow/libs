import * as s from 'superstruct';

import Client from '@/client';

export * from '@/models';
export * from '@/constants';

const Options = s.object({
  clientKey: s.string(),
  apiEndpoint: s.string(),
});

const GenerateClientOptions = s.type({
  authorization: s.string(),
});

class ApiSDK {
  private clientKey: string;

  private apiEndpoint: string;

  constructor({ clientKey, apiEndpoint }: s.StructType<typeof Options>) {
    s.assert({ clientKey, apiEndpoint }, Options);

    this.clientKey = clientKey;
    this.apiEndpoint = apiEndpoint;
  }

  public generateClient({ authorization }: s.StructType<typeof GenerateClientOptions>): Client {
    s.assert({ authorization }, GenerateClientOptions);

    return new Client({
      clientKey: this.clientKey,
      apiEndpoint: this.apiEndpoint,
      authorization,
    });
  }
}

export default ApiSDK;
