import { expect } from 'chai';

import { loadProjectDirectory } from '../../src/loaders';

describe('loadProjectDirectory', () => {
  it('loads files in glob', async () => {
    const project = loadProjectDirectory({}, `${__dirname}/*.ts`);
    expect(project.getSourceFiles().length).to.equal(1);
  });
});
