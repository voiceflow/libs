import { expect } from 'chai';
import { Project } from 'ts-morph';

import { exportStarToImportStarExport } from '../../src/modifiers';

describe('exportStarToImportStarExport', () => {
  let project: Project;

  beforeEach(() => {
    project = new Project({
      skipLoadingLibFiles: true,
      skipAddingFilesFromTsConfig: true,
      skipFileDependencyResolution: true,
      useInMemoryFileSystem: true,
    });
  });

  it('formats file with an named export', async () => {
    const sourceFile = project.createSourceFile(
      'test.d.ts',
      `
export * as test from '../../../../src';
    `
    );

    const resultFileText = `
import * as test from '../../../../src';

export { test };
    `;

    exportStarToImportStarExport(sourceFile);

    expect(sourceFile.getFullText()).to.equal(resultFileText);
  });

  it('formats file with a named import and named export', async () => {
    const sourceFile = project.createSourceFile(
      'test.d.ts',
      `
import * as test from '../../../../src';
export * as test from '../../../../src';
    `
    );

    const resultFileText = `
import * as test from '../../../../src';
export { test };
    `;

    exportStarToImportStarExport(sourceFile);

    expect(sourceFile.getFullText()).to.equal(resultFileText);
  });

  it('formats file with a named import and export object', async () => {
    const sourceFile = project.createSourceFile(
      'test.d.ts',
      `
import * as test from '../../../../src';
export { test };
    `
    );

    const resultFileText = `
import * as test from '../../../../src';
export { test };
    `;

    exportStarToImportStarExport(sourceFile);

    expect(sourceFile.getFullText()).to.equal(resultFileText);
  });
});
