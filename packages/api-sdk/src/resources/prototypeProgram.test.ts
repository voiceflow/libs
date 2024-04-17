/* eslint-disable dot-notation */

import { describe, expect, it } from 'vitest';

import Program from './program';
import PrototypeProgram from './prototypeProgram';

describe('PrototypeProgramResource', () => {
  it('instance of ProgramResource', async () => {
    const resource = new PrototypeProgram(null as any);

    expect(resource).toBeInstanceOf(Program);
  });

  it('uses prototype-programs endpoint', async () => {
    const resource = new PrototypeProgram(null as any);

    expect(resource['endpoint']).toBe('prototype-programs');
  });
});
