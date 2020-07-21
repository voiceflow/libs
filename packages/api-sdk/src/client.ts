import Fetch, { FetchOptions } from '@/fetch';
import { Diagram, Program, Project, Version } from '@/resources';

class Client {
  public project: Project;

  public version: Version;

  public program: Program;

  public diagram: Diagram;

  constructor({ clientKey, apiEndpoint, authorization }: FetchOptions) {
    const fetch = new Fetch({ clientKey, apiEndpoint, authorization });

    this.project = new Project(fetch);
    this.version = new Version(fetch);
    this.program = new Program(fetch);
    this.diagram = new Diagram(fetch);
  }
}

export default Client;
