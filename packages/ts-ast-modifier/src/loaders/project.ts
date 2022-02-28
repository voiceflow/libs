import { Project, ProjectOptions } from 'ts-morph';

export type LoadProjectDirectoryOptions = Omit<ProjectOptions, 'skipAddingFilesFromTsConfig'>;

export const loadProjectDirectory = (projectOptions: LoadProjectDirectoryOptions, sourceFilesGlob: string) => {
  const project = new Project({
    ...projectOptions,
    skipAddingFilesFromTsConfig: true,
  });

  project.addSourceFilesAtPaths(sourceFilesGlob);

  return project;
};
