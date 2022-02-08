/* eslint-disable dot-notation */
import { Program, PrototypeProgram } from '@api-sdk/resources';
import { expect } from 'chai';

describe('PrototypeProgramResource', () => {
  it('instance of ProgramResource', async () => {
    const resource = new PrototypeProgram(null as any);

    expect(resource).to.be.instanceOf(Program);
  });

  it('uses prototype-programs endpoint', async () => {
    const resource = new PrototypeProgram(null as any);

    expect(resource['endpoint']).to.eql('prototype-programs');
  });
});
