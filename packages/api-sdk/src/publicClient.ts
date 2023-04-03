import { Crypto } from '@voiceflow/common';

import Fetch, { FetchConfig } from './fetch';
import { Analytics, APIKey, Diagram, Note, Program, Project, ProjectSecret, PrototypeProgram, Template, VariableState, Version } from './resources';

export interface ClientOptions {
  options?: FetchConfig;
  clientKey: string;
  apiEndpoint: string;
  authorization?: string;
  analyticsEncryption?: Crypto.Synchronous;
}

export class PublicClient {
  public note: Note;

  public fetch: Fetch;

  public apiKey: APIKey;

  public project: Project;

  public projectSecret: ProjectSecret;

  public version: Version;

  public program: Program;

  public diagram: Diagram;

  public analytics: Analytics;

  public variableState: VariableState;

  public prototypeProgram: PrototypeProgram;

  public template: Template;

  constructor({ clientKey, apiEndpoint, authorization, options, analyticsEncryption }: ClientOptions) {
    this.fetch = new Fetch({ clientKey, apiEndpoint, authorization, options });

    this.note = new Note(this.fetch);
    this.apiKey = new APIKey(this.fetch);
    this.project = new Project(this.fetch);
    this.projectSecret = new ProjectSecret(this.fetch);
    this.version = new Version(this.fetch);
    this.program = new Program(this.fetch);
    this.diagram = new Diagram(this.fetch);
    this.analytics = new Analytics(this.fetch, { encryption: analyticsEncryption });
    this.variableState = new VariableState(this.fetch);
    this.prototypeProgram = new PrototypeProgram(this.fetch);
    this.template = new Template(this.fetch);
  }
}
