import { describe, expect, it } from 'vitest';

import { TimeoutModule } from './timeout.module';

describe('TimeoutModule', () => {
  it('should be defined', () => {
    expect(() => new TimeoutModule()).not.toThrow();
  });
});
