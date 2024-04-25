import { describe, it, expect } from 'vitest';
import { isBaseAction } from './action';

describe('Request type guards', () => {
  it('new', async () => {
    const fail1 = undefined; 
    const fail2 = null;
    const fail3 = [];
    const fail4 = {};

    expect(isBaseAction(fail1)).toBe(false);
    expect(isBaseAction(fail2)).toBe(false);
    expect(isBaseAction(fail3)).toBe(false);
    expect(isBaseAction(fail4)).toBe(false);
  });
});
