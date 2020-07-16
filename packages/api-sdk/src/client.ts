import axios, { AxiosInstance } from 'axios';

import Fetch from '@/fetch';

type Options = {
  clientKey: string;
  apiEndpoint: string;
  authorization: string;
};

class Client {
  private fetch: Fetch;

  constructor({ clientKey, apiEndpoint, authorization }: Options) {
    this.fetch = new Fetch({ clientKey, apiEndpoint, authorization });
  }
}

export default Client;
