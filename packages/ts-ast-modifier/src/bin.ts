#!/usr/env node

import { Loaders, Modifiers } from '.';

const [tsConfigFilePath, glob] = process.argv.slice(2);

const project = Loaders.loadProjectDirectory(
  {
    tsConfigFilePath,
  },
  glob
);

project.getSourceFiles().forEach((sourceFile) => {
  Modifiers.exportStarToImportStarExport(sourceFile);
  sourceFile.saveSync();
});

project.saveSync();
