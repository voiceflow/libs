import Fetch, { FetchConfig } from './fetch';
import { APIKey, Diagram, Note, Program, Project, ProjectSecret, PrototypeProgram, VariableState, Version } from './resources';

export interface ClientOptions {
  options?: FetchConfig;
  clientKey: string;
  apiEndpoint: string;
  authorization?: string;
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

  public variableState: VariableState;

  public prototypeProgram: PrototypeProgram;

  constructor({ clientKey, apiEndpoint, authorization, options }: ClientOptions) {
    this.fetch = new Fetch({ clientKey, apiEndpoint, authorization, options });

    this.note = new Note(this.fetch);
    this.apiKey = new APIKey(this.fetch);
    this.project = new Project(this.fetch);
    this.projectSecret = new ProjectSecret(this.fetch);
    this.version = new Version(this.fetch);
    this.program = new Program(this.fetch);
    this.diagram = new Diagram(this.fetch);
    this.variableState = new VariableState(this.fetch);
    this.prototypeProgram = new PrototypeProgram(this.fetch);
  }
}
