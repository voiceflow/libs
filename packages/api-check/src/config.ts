import { IConfigFile } from '@microsoft/api-extractor';
import { existsSync, readFileSync } from 'fs';
import { dirname, join } from 'path';
import { ProjectOptions } from 'ts-morph';

export interface ConfigOverrides {
  /** Override api-extractor settings */
  apiExtractorOverride?: Partial<IConfigFile>;
  /** Override ts-morph settings */
  tsMorphOverride?: Partial<ProjectOptions>;
}

export interface ConfigFile extends ConfigOverrides {
  /** Folder with project's package.json and tsconfig.json */
  projectPath: string;
  /** Path to tsconfig.json relative to projectPath */
  tsConfigPath?: string;
}

export interface ProjectConfig extends ConfigFile {
  packageJsonPath: string;
  tsConfigPath: string;
  typesEntry: string;
  typesSourceGlob: string;
}

export const loadConfig = (configPath: string): ConfigFile => {
  if (!existsSync(configPath)) throw new Error(`Config file not found: ${configPath}`);

  // TODO: validate config
  return JSON.parse(readFileSync(configPath, { encoding: 'utf-8' })) as ConfigFile;
};

interface PackageJSON {
  types?: string;
  typings?: string;
}

export const loadProject = (configFile: ConfigFile): ProjectConfig => {
  const packageJsonPath = join(configFile.projectPath, 'package.json');
  const tsConfigPath = join(configFile.projectPath, configFile.tsConfigPath ?? 'tsconfig.json');

  if (!existsSync(packageJsonPath)) throw new Error(`No package.json found: ${packageJsonPath}`);

  if (!existsSync(tsConfigPath)) throw new Error(`No tsconfig.json found: ${tsConfigPath}`);

  const packageJSON = JSON.parse(readFileSync(packageJsonPath, { encoding: 'utf-8' })) as PackageJSON;

  const { types, typings } = packageJSON;
  const typesPath = types ?? typings;
  if (!typesPath) throw new Error(`No types specified in package.json`);

  const typesEntry = join(configFile.projectPath, typesPath);
  const typesSourceGlob = join(dirname(typesEntry), '**/*.d.ts');

  return {
    ...configFile,
    packageJsonPath,
    tsConfigPath,
    typesEntry,
    typesSourceGlob,
  };
};
