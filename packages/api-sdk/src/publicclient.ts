import { Crypto } from '@voiceflow/common';

import Fetch, { FetchConfig } from '@/fetch';
import { Analytics, APIKey, Diagram, Program, Project, PrototypeProgram, Version } from '@/resources';

export interface ClientOptions {
  options?: FetchConfig;
  clientKey: string;
  apiEndpoint: string;
  authorization?: string;
  analyticsEncryption?: Crypto.Synchronous;
}

export class PublicClient {
  public fetch: Fetch;

  public project: Project;

  public version: Version;

  public program: Program;

  public diagram: Diagram;

  public analytics: Analytics;

  public apiKey: APIKey;

  public prototypeProgram: PrototypeProgram;

  constructor({ clientKey, apiEndpoint, authorization, options, analyticsEncryption }: ClientOptions) {
    this.fetch = new Fetch({ clientKey, apiEndpoint, authorization, options });

    this.apiKey = new APIKey(this.fetch);
    this.project = new Project(this.fetch);
    this.version = new Version(this.fetch);
    this.program = new Program(this.fetch);
    this.diagram = new Diagram(this.fetch);
    this.analytics = new Analytics(this.fetch, { encryption: analyticsEncryption });
    this.prototypeProgram = new PrototypeProgram(this.fetch);
  }
}
