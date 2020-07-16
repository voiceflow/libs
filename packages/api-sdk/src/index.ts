import * as t from 'io-ts';

import Client from '@/client';
import { validate } from '@/utils';

const Options = t.type({
  clientKey: t.string,
  apiEndpoint: t.string,
});

const GenerateClientOptions = t.type({
  authorization: t.string,
});

type OptionsType = t.TypeOf<typeof Options>;
type GenerateClientOptionsType = t.TypeOf<typeof GenerateClientOptions>;

class ApiSDK {
  private clientKey: string;

  private apiEndpoint: string;

  constructor({ clientKey, apiEndpoint }: OptionsType) {
    validate(Options.decode({ clientKey, apiEndpoint }));

    this.clientKey = clientKey;
    this.apiEndpoint = apiEndpoint;
  }

  public generateClient({ authorization }: GenerateClientOptionsType): Client {
    validate(GenerateClientOptions.decode({ authorization }));

    return new Client({
      clientKey: this.clientKey,
      apiEndpoint: this.apiEndpoint,
      authorization,
    });
  }
}

export default ApiSDK;
