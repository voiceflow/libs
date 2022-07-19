import { getTopLevelDiff } from '@common/utils/object/diff';
import { expect } from 'chai';

describe('Utils | object | diff', () => {
  describe('getTopLevelDiff()', () => {
    it('gets diff of arrays', () => {
      expect(getTopLevelDiff(['foo', 'bar', 'fuzz'], ['fizz', 'buzz', 'fuzz'])).to.eql(['foo', 'bar']);
    });

    it('gets diff of objects', () => {
      expect(getTopLevelDiff({ foo: 1, bar: 2, fuzz: 3 }, { fizz: 4, buzz: 5, fuzz: 3 })).to.eql({ foo: 1, bar: 2 });
    });

    it('gets diff of objects with custom compare', () => {
      expect(getTopLevelDiff({ foo: 1, bar: 2, fuzz: 6 }, { fizz: 4, buzz: 5, fuzz: 9 }, (lhs, rhs) => typeof lhs === typeof rhs)).to.eql({
        foo: 1,
        bar: 2,
      });
    });
  });
});
