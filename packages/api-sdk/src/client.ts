import Fetch, { FetchConfig } from '@/fetch';
import { APIKey, Diagram, Program, Project, PrototypeProgram, User, Version } from '@/resources';

export type ClientOptions = {
  options?: FetchConfig;
  clientKey: string;
  apiEndpoint: string;
  authorization?: string;
};

export class PublicClient {
  public fetch: Fetch;

  public project: Project;

  public version: Version;

  public program: Program;

  public diagram: Diagram;

  public apiKey: APIKey;

  public prototypeProgram: PrototypeProgram;

  constructor({ clientKey, apiEndpoint, authorization, options }: ClientOptions) {
    this.fetch = new Fetch({ clientKey, apiEndpoint, authorization, options });

    this.apiKey = new APIKey(this.fetch);
    this.project = new Project(this.fetch);
    this.version = new Version(this.fetch);
    this.program = new Program(this.fetch);
    this.diagram = new Diagram(this.fetch);
    this.prototypeProgram = new PrototypeProgram(this.fetch);
  }
}

export class Client extends PublicClient {
  public user: User;

  constructor({ clientKey, apiEndpoint, authorization, options }: Omit<ClientOptions, 'authorization'> & { authorization: string }) {
    super({ clientKey, apiEndpoint, authorization, options });

    this.user = new User(authorization);
  }
}
