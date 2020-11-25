/* eslint-disable dot-notation */
import { expect } from 'chai';

import { Program, PrototypeProgram } from '@/resources';

describe('PrototypeProgramResource', () => {
  it('instance of ProgramResource', async () => {
    const resource = new PrototypeProgram(null as any);

    expect(resource).to.be.instanceOf(Program);
  });

  it('uses prototype-programs endpoint', async () => {
    const resource = new PrototypeProgram(null as any);

    expect(resource['resourceEndpoint']).to.eql('prototype-programs');
  });
});
