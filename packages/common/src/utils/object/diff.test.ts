import { describe, expect, it } from 'vitest';

import { getTopLevelDiff } from './diff';

describe('Utils | object | diff', () => {
  describe('getTopLevelDiff()', () => {
    it('gets diff of arrays', () => {
      expect(getTopLevelDiff(['foo', 'bar', 'fuzz'], ['fizz', 'buzz', 'fuzz'])).toEqual(['foo', 'bar']);
    });

    it('gets diff of objects', () => {
      expect(getTopLevelDiff({ foo: 1, bar: 2, fuzz: 3 }, { fizz: 4, buzz: 5, fuzz: 3 })).toEqual({ foo: 1, bar: 2 });
    });

    it('gets diff of objects with custom compare', () => {
      expect(
        getTopLevelDiff(
          { foo: 1, bar: 2, fuzz: 6 },
          { fizz: 4, buzz: 5, fuzz: 9 },
          (lhs, rhs) => typeof lhs === typeof rhs
        )
      ).toEqual({
        foo: 1,
        bar: 2,
      });
    });
  });
});
