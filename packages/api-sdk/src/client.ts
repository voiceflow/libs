import Fetch from '@/fetch';
import { Diagram, Program, Project, Version } from '@/resources';

type Options = {
  clientKey: string;
  apiEndpoint: string;
  authorization: string;
};

class Client {
  public project: Project;

  public version: Version;

  public program: Program;

  public diagram: Diagram;

  constructor({ clientKey, apiEndpoint, authorization }: Options) {
    const fetch = new Fetch({ clientKey, apiEndpoint, authorization });

    this.project = new Project(fetch);
    this.version = new Version(fetch);
    this.program = new Program(fetch);
    this.diagram = new Diagram(fetch);
  }
}

export default Client;
