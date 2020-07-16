import Fetch from '@/fetch';
import { Project } from '@/resources';

type Options = {
  clientKey: string;
  apiEndpoint: string;
  authorization: string;
};

class Client {
  public project: Project;

  constructor({ clientKey, apiEndpoint, authorization }: Options) {
    const fetch = new Fetch({ clientKey, apiEndpoint, authorization });

    this.project = new Project(fetch);
  }
}

export default Client;
