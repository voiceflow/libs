import { describe, expect, it } from 'vitest';

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
} from './array';

describe('Utils | array', () => {
  describe('unique()', () => {
    it('return an array containing one instance of each value from the array passed to it', () => {
      expect(unique([1, 1, 2, 0, 1, 4, 3, 1, 9, 9, 2])).toEqual([1, 2, 0, 4, 3, 9]);
    });
  });

  describe('without()', () => {
    it('return an array containing every value from the array passed to it except for the value at the provided index', () => {
      expect(without([], -1)).toEqual([]);
      expect(without([], 0)).toEqual([]);
      expect(without(['a', 'b', 'c', 'd'], -1)).toEqual(['a', 'b', 'c', 'd']);
      expect(without(['a', 'b', 'c', 'd'], 0)).toEqual(['b', 'c', 'd']);
      expect(without(['a', 'b', 'c', 'd'], 2)).toEqual(['a', 'b', 'd']);
      expect(without(['a', 'b', 'c', 'd'], 4)).toEqual(['a', 'b', 'c', 'd']);
    });
  });

  describe('withoutValue()', () => {
    it('return an array containing every value from the array passed to it except for first value that is directly equal to the provided value', () => {
      expect(withoutValue([], 'd')).toEqual([]);
      expect(withoutValue(['a', 'b', 'c', 'd'], 'g')).toEqual(['a', 'b', 'c', 'd']);
      expect(withoutValue(['a', 'b', 'c', 'd'], 'b')).toEqual(['a', 'c', 'd']);
    });
  });

  describe('withoutValues()', () => {
    it('return an array containing every value from the array passed to it except for values from a second provided array', () => {
      expect(withoutValues(['a', 'b', 'c', 'd'], [])).toEqual(['a', 'b', 'c', 'd']);
      expect(withoutValues([], ['g', 'c', 'b', 'e'])).toEqual([]);
      expect(withoutValues(['a', 'b', 'c', 'd'], ['g', 'c', 'b', 5])).toEqual(['a', 'd']);
      expect(withoutValues(['a', 'b', 'c', 'd'], ['g', 'e'])).toEqual(['a', 'b', 'c', 'd']);
    });
  });

  describe('replace()', () => {
    it('return an array where the value at the provided index has been replaced with the new value', () => {
      expect(insert([], 8, 'f')).toEqual(['f']);
      expect(replace(['a', 'b', 'c', 'd'], -1, 'f')).toEqual(['a', 'b', 'c', 'd']);
      expect(replace(['a', 'b', 'c', 'd'], 8, 'f')).toEqual(['a', 'b', 'c', 'd', 'f']);
      expect(replace(['a', 'b', 'c', 'd'], 2, 'f')).toEqual(['a', 'b', 'f', 'd']);
    });
  });

  describe('insert()', () => {
    it('return an array where the provided value has been inserted at the provided index', () => {
      expect(insert([], 8, 'f')).toEqual(['f']);
      expect(insert(['a', 'b', 'c', 'd'], -1, 'f')).toEqual(['f', 'a', 'b', 'c', 'd']);
      expect(insert(['a', 'b', 'c', 'd'], 2, 'f')).toEqual(['a', 'b', 'f', 'c', 'd']);
      expect(insert(['a', 'b', 'c', 'd'], 8, 'f')).toEqual(['a', 'b', 'c', 'd', 'f']);
    });
  });

  describe('insertAll()', () => {
    it('return an array where the provided array of values has been inserted at the provided index', () => {
      expect(insertAll([], 8, ['f', 'g', 'h'])).toEqual(['f', 'g', 'h']);
      expect(insertAll(['a', 'b', 'c', 'd'], -1, ['f', 'g', 'h'])).toEqual(['f', 'g', 'h', 'a', 'b', 'c', 'd']);
      expect(insertAll(['a', 'b', 'c', 'd'], 2, ['f', 'g', 'h'])).toEqual(['a', 'b', 'f', 'g', 'h', 'c', 'd']);
      expect(insertAll(['a', 'b', 'c', 'd'], 8, ['f', 'g', 'h'])).toEqual(['a', 'b', 'c', 'd', 'f', 'g', 'h']);
    });
  });

  describe('append()', () => {
    it('return an array with the provided value appended, does not add if already exists', () => {
      expect(append([], 'f')).toEqual(['f']);
      expect(append(['a', 'b', 'c', 'd'], 'f')).toEqual(['a', 'b', 'c', 'd', 'f']);
      expect(append(['a', 'b', 'c'], 'c')).toEqual(['a', 'b', 'c']);
    });
  });

  describe('toggleMembership()', () => {
    it('return an array with the provided value included or excluded, the opposite of the current state', () => {
      expect(toggleMembership(['a', 'b', 'c'], 'f')).toEqual(['a', 'b', 'c', 'f']);
      expect(toggleMembership(['a', 'b', 'c', 'f'], 'f')).toEqual(['a', 'b', 'c']);
    });
  });

  describe('head()', () => {
    it('return the item at the head of the array and an array containing the remaining elements as a tuple pair', () => {
      expect(head(['a', 'b', 'c', 'd'])).toEqual(['a', ['b', 'c', 'd']]);
      expect(head(['a'])).toEqual(['a', []]);
      expect(head([])).toEqual([undefined, []]);
    });
  });

  describe('tail()', () => {
    it('return the item at the end of the array and an array containing the remaining elements as a tuple pair', () => {
      expect(tail(['a', 'b', 'c', 'd'])).toEqual([['a', 'b', 'c'], 'd']);
      expect(tail(['a'])).toEqual([[], 'a']);
      expect(tail([])).toEqual([[], undefined]);
    });
  });

  describe('filterOutNullish()', () => {
    it('filters nullish values', () => {
      expect(filterOutNullish([undefined, 1, null])).toEqual([1]);
      expect(filterOutNullish([undefined, null])).toEqual([]);
      expect(filterOutNullish([1])).toEqual([1]);
    });
  });

  describe('isNullish()', () => {
    it('works', () => {
      expect(isNullish(null)).toBe(true);
      expect(isNullish(undefined)).toBe(true);
      expect(isNullish(0)).toBe(false);
    });
  });

  describe('isNotNullish()', () => {
    it('works', () => {
      expect(isNotNullish(null)).toBe(false);
      expect(isNotNullish(undefined)).toBe(false);
      expect(isNotNullish(0)).toBe(true);
    });
  });

  describe('toArray()', () => {
    it('works with arrays', () => {
      const value = [1];

      expect(toArray(value)).toEqual([1]);
    });

    it('works with non-arrays', () => {
      const value = 1;

      expect(toArray(value)).toEqual([1]);
    });
  });

  describe('reorder()', () => {
    it('should do nothing if from index goes outside array', () => {
      const array = [1, 2, 3];
      expect(reorder(array, -1, 1)).toEqual(array);
      expect(reorder(array, 3, 1)).toEqual(array);
    });

    it('should set as first item if toIndex is zero or lower than 0', () => {
      const array = [1, 2, 3];

      expect(reorder(array, 2, -1)).toEqual([3, 1, 2]);
      expect(reorder(array, 2, 0)).toEqual([3, 1, 2]);
    });

    it('should set as last item if toIndex is the last or greater than last', () => {
      const array = [1, 2, 3];

      expect(reorder(array, 0, 2)).toEqual([2, 3, 1]);
      expect(reorder(array, 0, 3)).toEqual([2, 3, 1]);
    });

    it('should reorder moving forward or backward', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      expect(reorder(array, 1, 2)).toEqual([1, 3, 2, 4, 5, 6, 7, 8, 9, 10]);
      expect(reorder(array, 2, 3)).toEqual([1, 2, 4, 3, 5, 6, 7, 8, 9, 10]);
      expect(reorder(array, 2, 8)).toEqual([1, 2, 4, 5, 6, 7, 8, 9, 3, 10]);

      expect(reorder(array, 8, 1)).toEqual([1, 9, 2, 3, 4, 5, 6, 7, 8, 10]);
      expect(reorder(array, 7, 2)).toEqual([1, 2, 8, 3, 4, 5, 6, 7, 9, 10]);
    });
  });

  describe('separate()', () => {
    it('separates items that pass and fail a predicate', () => {
      const [passes, fails] = separate([20, 1, -3, 15, 8, 23, 40, 3], (x) => x > 10);

      expect(passes).toEqual([20, 15, 23, 40]);
      expect(fails).toEqual([1, -3, 8, 3]);
    });
  });

  describe('createEntries()', () => {
    it('creates entries by extracting a key for each item in an array', () => {
      const entries = createEntries([{ index: 1 }, { index: 3 }, { index: 5 }], ({ index }) => String(index));

      expect(entries).toEqual([
        ['1', { index: 1 }],
        ['3', { index: 3 }],
        ['5', { index: 5 }],
      ]);
    });
  });

  describe('createMap()', () => {
    it('creates object by extracting a key for each item in an array', () => {
      const obj = createMap([{ index: 1 }, { index: 3 }, { index: 5 }], ({ index }) => String(index));

      expect(obj).toEqual({
        1: { index: 1 },
        3: { index: 3 },
        5: { index: 5 },
      });
    });
  });

  describe('findUnion()', () => {
    it('finds the overlap between two lists', () => {
      const { lhsOnly, rhsOnly, union } = findUnion([20, 1, -3, 15], [1, 8, 23, -3, 40, 3]);

      expect(lhsOnly).toEqual([20, 15]);
      expect(rhsOnly).toEqual([8, 23, 40, 3]);
      expect(union).toEqual([1, -3]);
    });
  });

  describe('diff()', () => {
    it('finds items that only occur in one of two lists', () => {
      expect(diff([20, 1, -3, 15], [1, 8, 23, -3, 40, 3])).toEqual([20, 15, 8, 23, 40, 3]);
    });
  });

  describe('hasIdenticalMembers()', () => {
    it('returns false if lists have different lengths', () => {
      expect(hasIdenticalMembers([1, 2, 3], [3, 3, 2, 2, 1])).toBe(false);
    });

    it('returns false if either list has a unique member', () => {
      expect(hasIdenticalMembers([1, 2, 3], [2, 3])).toBe(false);
    });

    it('returns true if both lists contain the same members', () => {
      expect(hasIdenticalMembers([1, 2, 3], [3, 1, 2])).toBe(true);
    });

    it('returns true if both lists are empty', () => {
      expect(hasIdenticalMembers([], [])).toBe(true);
    });
  });

  describe('filterAndGetLastRemovedValue()', () => {
    it('returns the last item which did not pass the filter predicate', () => {
      expect(filterAndGetLastRemovedValue([1, 2, 3], () => true)).toEqual([[1, 2, 3], null]);
      expect(filterAndGetLastRemovedValue([], () => false)).toEqual([[], null]);
      expect(filterAndGetLastRemovedValue([1, 2, 3], (x) => x !== 2)).toEqual([[1, 3], 2]);
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

      expect(result).toEqual([
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
