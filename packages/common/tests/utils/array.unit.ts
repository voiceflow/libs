import {
  append,
  filterOutNullish,
  head,
  insert,
  insertAll,
  isNotNullish,
  isNullish,
  replace,
  tail,
  toggleMembership,
  unique,
  without,
  withoutValue,
  withoutValues,
} from '@common/utils/array';
import { expect } from 'chai';

describe('Utils | array', () => {
  describe('unique()', () => {
    it('return an array containing one instance of each value from the array passed to it', () => {
      expect(unique([1, 1, 2, 0, 1, 4, 3, 1, 9, 9, 2])).to.eql([1, 2, 0, 4, 3, 9]);
    });
  });

  describe('without()', () => {
    it('return an array containing every value from the array passed to it except for the value at the provided index', () => {
      expect(without([], -1)).to.eql([]);
      expect(without([], 0)).to.eql([]);
      expect(without(['a', 'b', 'c', 'd'], -1)).to.eql(['a', 'b', 'c', 'd']);
      expect(without(['a', 'b', 'c', 'd'], 0)).to.eql(['b', 'c', 'd']);
      expect(without(['a', 'b', 'c', 'd'], 2)).to.eql(['a', 'b', 'd']);
      expect(without(['a', 'b', 'c', 'd'], 4)).to.eql(['a', 'b', 'c', 'd']);
    });
  });

  describe('withoutValue()', () => {
    it('return an array containing every value from the array passed to it except for first value that is directly equal to the provided value', () => {
      expect(withoutValue([], 'd')).to.eql([]);
      expect(withoutValue(['a', 'b', 'c', 'd'], 'g')).to.eql(['a', 'b', 'c', 'd']);
      expect(withoutValue(['a', 'b', 'c', 'd'], 'b')).to.eql(['a', 'c', 'd']);
    });
  });

  describe('withoutValues()', () => {
    it('return an array containing every value from the array passed to it except for values from a second provided array', () => {
      expect(withoutValues(['a', 'b', 'c', 'd'], [])).to.eql(['a', 'b', 'c', 'd']);
      expect(withoutValues([], ['g', 'c', 'b', 'e'])).to.eql([]);
      expect(withoutValues(['a', 'b', 'c', 'd'], ['g', 'c', 'b', 5])).to.eql(['a', 'd']);
      expect(withoutValues(['a', 'b', 'c', 'd'], ['g', 'e'])).to.eql(['a', 'b', 'c', 'd']);
    });
  });

  describe('replace()', () => {
    it('return an array where the value at the provided index has been replaced with the new value', () => {
      expect(insert([], 8, 'f')).to.eql(['f']);
      expect(replace(['a', 'b', 'c', 'd'], -1, 'f')).to.eql(['a', 'b', 'c', 'd']);
      expect(replace(['a', 'b', 'c', 'd'], 8, 'f')).to.eql(['a', 'b', 'c', 'd', 'f']);
      expect(replace(['a', 'b', 'c', 'd'], 2, 'f')).to.eql(['a', 'b', 'f', 'd']);
    });
  });

  describe('insert()', () => {
    it('return an array where the provided value has been inserted at the provided index', () => {
      expect(insert([], 8, 'f')).to.eql(['f']);
      expect(insert(['a', 'b', 'c', 'd'], -1, 'f')).to.eql(['f', 'a', 'b', 'c', 'd']);
      expect(insert(['a', 'b', 'c', 'd'], 2, 'f')).to.eql(['a', 'b', 'f', 'c', 'd']);
      expect(insert(['a', 'b', 'c', 'd'], 8, 'f')).to.eql(['a', 'b', 'c', 'd', 'f']);
    });
  });

  describe('insertAll()', () => {
    it('return an array where the provided array of values has been inserted at the provided index', () => {
      expect(insertAll([], 8, ['f', 'g', 'h'])).to.eql(['f', 'g', 'h']);
      expect(insertAll(['a', 'b', 'c', 'd'], -1, ['f', 'g', 'h'])).to.eql(['f', 'g', 'h', 'a', 'b', 'c', 'd']);
      expect(insertAll(['a', 'b', 'c', 'd'], 2, ['f', 'g', 'h'])).to.eql(['a', 'b', 'f', 'g', 'h', 'c', 'd']);
      expect(insertAll(['a', 'b', 'c', 'd'], 8, ['f', 'g', 'h'])).to.eql(['a', 'b', 'c', 'd', 'f', 'g', 'h']);
    });
  });

  describe('append()', () => {
    it('return an array with the provided value appended, does not add if already exists', () => {
      expect(append([], 'f')).to.eql(['f']);
      expect(append(['a', 'b', 'c', 'd'], 'f')).to.eql(['a', 'b', 'c', 'd', 'f']);
      expect(append(['a', 'b', 'c'], 'c')).to.eql(['a', 'b', 'c']);
    });
  });

  describe('toggleMembership()', () => {
    it('return an array with the provided value included or excluded, the opposite of the current state', () => {
      expect(toggleMembership(['a', 'b', 'c'], 'f')).to.eql(['a', 'b', 'c', 'f']);
      expect(toggleMembership(['a', 'b', 'c', 'f'], 'f')).to.eql(['a', 'b', 'c']);
    });
  });

  describe('head()', () => {
    it('return the item at the head of the array and an array containing the remaining elements as a tuple pair', () => {
      expect(head(['a', 'b', 'c', 'd'])).to.eql(['a', ['b', 'c', 'd']]);
      expect(head(['a'])).to.eql(['a', []]);
      expect(head([])).to.eql([undefined, []]);
    });
  });

  describe('tail()', () => {
    it('return the item at the end of the array and an array containing the remaining elements as a tuple pair', () => {
      expect(tail(['a', 'b', 'c', 'd'])).to.eql([['a', 'b', 'c'], 'd']);
      expect(tail(['a'])).to.eql([[], 'a']);
      expect(tail([])).to.eql([[], undefined]);
    });
  });

  describe('filterOutNullish()', () => {
    it('filters nullish values', () => {
      expect(filterOutNullish([undefined, 1, null])).to.eql([1]);
      expect(filterOutNullish([undefined, null])).to.eql([]);
      expect(filterOutNullish([1])).to.eql([1]);
    });
  });

  describe('isNullish()', () => {
    it('works', () => {
      expect(isNullish(null)).to.eql(true);
      expect(isNullish(undefined)).to.eql(true);
      expect(isNullish(0)).to.eql(false);
    });
  });

  describe('isNotNullish()', () => {
    it('works', () => {
      expect(isNotNullish(null)).to.eql(false);
      expect(isNotNullish(undefined)).to.eql(false);
      expect(isNotNullish(0)).to.eql(true);
    });
  });
});
