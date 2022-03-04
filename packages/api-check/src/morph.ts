import { Project, SourceFile, ts } from 'ts-morph';

import { ProjectConfig } from './config';

export const loadProjectDirectory = (config: ProjectConfig) => {
  const project = new Project({
    tsConfigFilePath: config.tsConfigPath,
    ...(config.tsMorphOverride ?? {}),
    skipAddingFilesFromTsConfig: true,
  });

  project.addSourceFilesAtPaths(config.typesSourceGlob);

  return project;
};

export const exportStarToImportStarExport = (sourceFile: SourceFile) => {
  const newNamedExports: Set<string> = new Set();
  const existingImportStarDeclarations: Set<string> = new Set();

  sourceFile.transform((traversal) => {
    const node = traversal.visitChildren();

    /**
     * Keep track of all named imports (`import * as x`)
     * as we may be exporting it afterwards (`export * as x`)
     * and we don't want to add an export _again_
     */
    if (
      ts.isImportDeclaration(node) &&
      node.importClause &&
      ts.isImportClause(node.importClause) &&
      node.importClause.namedBindings &&
      ts.isNamespaceImport(node.importClause.namedBindings)
    ) {
      const name = node.importClause.namedBindings.name.getText();
      existingImportStarDeclarations.add(name);
    } else if (ts.isExportDeclaration(node) && node.exportClause && ts.isNamespaceExport(node.exportClause)) {
      /**
       * Check if we have a named export (`export * as x`)
       */
      const exportName = node.exportClause!.name.getText();

      newNamedExports.add(exportName);

      // Change the named export into a named import
      // Only if we aren't already importing this
      if (!existingImportStarDeclarations.has(exportName)) {
        return ts.createImportDeclaration(
          undefined,
          undefined,
          ts.createImportClause(undefined, ts.createNamespaceImport(node.exportClause!.name), false),
          ts.createStringLiteral(node.moduleSpecifier!.getText().slice(1, -1), true),
          undefined
        );
      }
      return ts.createEmptyStatement();
    }

    return node;
  });

  if (newNamedExports.size > 0) {
    const namedExports: { name: string }[] = [];
    newNamedExports.forEach((name) => namedExports.push({ name }));

    sourceFile.addExportDeclaration({
      namedExports,
    });
  }

  sourceFile
    .getStatements()
    .filter((statement) => statement.getKind() === ts.SyntaxKind.EmptyStatement)
    .forEach((statement) => statement.remove());
};

export function morphProjectTypes(config: ProjectConfig) {
  const project = loadProjectDirectory(config);

  project.getSourceFiles().forEach((sourceFile) => {
    exportStarToImportStarExport(sourceFile);
    sourceFile.saveSync();
  });

  project.saveSync();
}
