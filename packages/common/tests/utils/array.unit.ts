import {
  append,
  createEntries,
  createMap,
  diff,
  filterAndGetLastRemovedValue,
  filterOutNullish,
  findUnion,
  hasIdenticalMembers,
  head,
  insert,
  insertAll,
  isNotNullish,
  isNullish,
  mergeByIdentifier,
  reorder,
  replace,
  separate,
  tail,
  toArray,
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

  describe('toArray()', () => {
    it('works with arrays', () => {
      const value = [1];

      expect(toArray(value)).to.eql([1]);
    });

    it('works with non-arrays', () => {
      const value = 1;

      expect(toArray(value)).to.eql([1]);
    });
  });

  describe('reorder()', () => {
    it('should do nothing if from index goes outside array', () => {
      const array = [1, 2, 3];
      expect(reorder(array, -1, 1)).to.eql(array);
      expect(reorder(array, 3, 1)).to.eql(array);
    });

    it('should set as first item if toIndex is zero or lower than 0', () => {
      const array = [1, 2, 3];

      expect(reorder(array, 2, -1)).to.eql([3, 1, 2]);
      expect(reorder(array, 2, 0)).to.eql([3, 1, 2]);
    });

    it('should set as last item if toIndex is the last or greater than last', () => {
      const array = [1, 2, 3];

      expect(reorder(array, 0, 2)).to.eql([2, 3, 1]);
      expect(reorder(array, 0, 3)).to.eql([2, 3, 1]);
    });

    it('should reorder moving forward or backward', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      expect(reorder(array, 1, 2)).to.eql([1, 3, 2, 4, 5, 6, 7, 8, 9, 10]);
      expect(reorder(array, 2, 3)).to.eql([1, 2, 4, 3, 5, 6, 7, 8, 9, 10]);
      expect(reorder(array, 2, 8)).to.eql([1, 2, 4, 5, 6, 7, 8, 9, 3, 10]);

      expect(reorder(array, 8, 1)).to.eql([1, 9, 2, 3, 4, 5, 6, 7, 8, 10]);
      expect(reorder(array, 7, 2)).to.eql([1, 2, 8, 3, 4, 5, 6, 7, 9, 10]);
    });
  });

  describe('separate()', () => {
    it('separates items that pass and fail a predicate', () => {
      const [passes, fails] = separate([20, 1, -3, 15, 8, 23, 40, 3], (x) => x > 10);

      expect(passes).to.eql([20, 15, 23, 40]);
      expect(fails).to.eql([1, -3, 8, 3]);
    });
  });

  describe('createEntries()', () => {
    it('creates entries by extracting a key for each item in an array', () => {
      const entries = createEntries([{ index: 1 }, { index: 3 }, { index: 5 }], ({ index }) => String(index));

      expect(entries).to.eql([
        ['1', { index: 1 }],
        ['3', { index: 3 }],
        ['5', { index: 5 }],
      ]);
    });
  });

  describe('createMap()', () => {
    it('creates object by extracting a key for each item in an array', () => {
      const obj = createMap([{ index: 1 }, { index: 3 }, { index: 5 }], ({ index }) => String(index));

      expect(obj).to.eql({
        1: { index: 1 },
        3: { index: 3 },
        5: { index: 5 },
      });
    });
  });

  describe('findUnion()', () => {
    it('finds the overlap between two lists', () => {
      const { lhsOnly, rhsOnly, union } = findUnion([20, 1, -3, 15], [1, 8, 23, -3, 40, 3]);

      expect(lhsOnly).to.eql([20, 15]);
      expect(rhsOnly).to.eql([8, 23, 40, 3]);
      expect(union).to.eql([1, -3]);
    });
  });

  describe('diff()', () => {
    it('finds items that only occur in one of two lists', () => {
      expect(diff([20, 1, -3, 15], [1, 8, 23, -3, 40, 3])).to.eql([20, 15, 8, 23, 40, 3]);
    });
  });

  describe('hasIdenticalMembers()', () => {
    it('returns false if lists have different lengths', () => {
      expect(hasIdenticalMembers([1, 2, 3], [3, 3, 2, 2, 1])).to.be.false;
    });

    it('returns false if either list has a unique member', () => {
      expect(hasIdenticalMembers([1, 2, 3], [2, 3])).to.be.false;
    });

    it('returns true if both lists contain the same members', () => {
      expect(hasIdenticalMembers([1, 2, 3], [3, 1, 2])).to.be.true;
    });

    it('returns true if both lists are empty', () => {
      expect(hasIdenticalMembers([], [])).to.be.true;
    });
  });

  describe('filterAndGetLastRemovedValue()', () => {
    it('returns the last item which did not pass the filter predicate', () => {
      expect(filterAndGetLastRemovedValue([1, 2, 3], () => true)).to.eql([[1, 2, 3], null]);
      expect(filterAndGetLastRemovedValue([], () => false)).to.eql([[], null]);
      expect(filterAndGetLastRemovedValue([1, 2, 3], (x) => x !== 2)).to.eql([[1, 3], 2]);
    });
  });

  describe('mergeByIdentifier()', () => {
    it('test', () => {
      const array1 = [
        {
          key: 1,
          value: [1, 2],
        },
      ];

      const array2 = [
        {
          key: 1,
          value: [3],
        },
        {
          key: 2,
          value: [4, 5],
        },
      ];

      const result = mergeByIdentifier(
        array1,
        array2,
        (x) => x.key.toString(),
        (a, b) => ({
          ...a,
          value: [...a.value, ...b.value],
        })
      );

      expect(result).to.eql([
        {
          key: 1,
          value: [1, 2, 3],
        },
        {
          key: 2,
          value: [4, 5],
        },
      ]);
    });
  });
});
