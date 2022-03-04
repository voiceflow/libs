import { Extractor, ExtractorConfig } from '@microsoft/api-extractor';

import { ProjectConfig } from './config';
// import {join} from 'path';

const API_EXTRACTOR_CONFIG_PATH = `${__dirname}/api-extractor.default.json`;

export const extractAPI = (config: ProjectConfig, build: boolean) => {
  const baseConfig = ExtractorConfig.loadFile(API_EXTRACTOR_CONFIG_PATH);

  const preparedConfig = ExtractorConfig.prepare({
    configObject: {
      ...baseConfig,
      mainEntryPointFilePath: config.typesEntry,
      projectFolder: config.projectPath,
      ...(config.apiExtractorOverride ?? {}),
    },
    configObjectFullPath: API_EXTRACTOR_CONFIG_PATH,
    packageJsonFullPath: config.packageJsonPath,
  });

  return Extractor.invoke(preparedConfig, {
    localBuild: build,
  });
};
