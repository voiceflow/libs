import { describe, expect, it } from 'vitest';

import { delay, rejectIn } from './promise';

describe('Utils | promise', () => {
  describe('delay()', () => {
    it('delay for the provided time before resolving', async () => {
      const timeout = 10;
      const start = Date.now();

      await delay(timeout);

      expect(Date.now() - start).toBeGreaterThanOrEqual(timeout);
    });
  });

  describe('rejectIn()', () => {
    it('delay for the provided time before rejecting', async () => {
      const timeout = 10;
      const start = Date.now();

      try {
        await rejectIn(timeout);
      } catch (err) {
        expect(Date.now() - start).toBeGreaterThanOrEqual(timeout);
      }
    });
  });
});
