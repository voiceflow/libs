import { loadConfig, loadProject, ProjectConfig } from '../config';
import { extractAPI } from '../extract';
import { morphProjectTypes } from '../morph';

export interface ActionParameters {
  build: boolean;
  config: string;
  project?: string;
}

export default async (args: ActionParameters) => {
  let config: ProjectConfig;
  if (args.project) {
    config = loadProject({
      projectPath: args.project,
    });
  } else {
    const configFile = loadConfig(args.config);
    config = loadProject(configFile);
  }

  morphProjectTypes(config);

  extractAPI(config, args.build);
};
