import ObjectID from 'bson-objectid';

import { deepMap, deepMapKeys } from './deepMap';

describe('Utils | object | deepMap', () => {
  describe('deepMap()', () => {
    const transform = (n: unknown) => (typeof n === 'number' ? n ** 2 : Number(n) ** 2);

    it('transforms simple object', () => {
      expect(deepMap({ two: 2, three: '3' }, transform)).toEqual({ two: 4, three: 9 });
    });

    it('transforms simple array', () => {
      expect(deepMap(['2', 3], transform)).toEqual([4, 9]);
    });

    it("don't change non plain objects", () => {
      const transform = (n: unknown) => (typeof n === 'string' ? Number(n) ** 2 : n);
      const date = new Date();

      expect(deepMap(['2', date], transform)).toEqual([4, date]);
    });

    it('transform objectID', () => {
      const originalID = new ObjectID();
      const transformedID = new ObjectID();
      const transform = (n: unknown) => (n === originalID ? transformedID : n);
      const date = new Date();

      expect(deepMap(['2', date, originalID], transform)).toEqual(['2', date, transformedID]);
    });

    it('transforms object with nested objects/arrays', () => {
      expect(deepMap({ two: '2', obj: { three: '3', four: 4 }, arr: [5, '6'] }, transform)).toEqual({
        two: 4,
        obj: { three: 9, four: 16 },
        arr: [25, 36],
      });
    });

    it('transforms array with nested objects/arrays', () => {
      expect(deepMap([2, { three: 3, four: 4 }, [5, 6]], transform)).toEqual([4, { three: 9, four: 16 }, [25, 36]]);
    });

    it('transforms an object with circular references', () => {
      const obj = { two: 2, arr: [3, 4], self: null as any, arr2: null as any };
      obj.self = obj;
      obj.arr2 = obj.arr;

      const exp = { two: 4, arr: [9, 16], self: null as any, arr2: null as any };
      exp.self = exp;
      exp.arr2 = exp.arr;

      expect(deepMap(obj, transform)).toEqual(exp);
    });

    it('transforms object in place', () => {
      const arr = [3];
      const obj = { two: 2, arr };

      const result = deepMap(obj, transform, { inPlace: true });

      expect(result).toEqual({ two: 4, arr: [9] });
      expect(result).toEqual(obj);
    });

    it('transforms sub-objects/sub-arrays in place', () => {
      const arr = [3];
      const obj = { two: 2, arr };

      expect(deepMap<typeof obj>(obj, transform, { inPlace: true }).arr).toEqual(arr);
    });

    it('defaults to false', () => {
      const arr = [3];
      const obj = { two: 2, arr };
      expect(deepMap(obj, transform)).not.toEqual(obj);
    });

    it('mapFunction is called once per primitive value', () => {
      const square = jest.fn(transform);

      deepMap({ two: 2, obj: { three: 3 }, arr: [4] }, square);

      expect(square).toHaveBeenCalledTimes(3);
    });

    it('mapFunction is called with value and key', () => {
      const square = jest.fn(transform);

      deepMap({ two: 2, arr: [3, 6] }, square);

      expect(square).toHaveBeenNthCalledWith(1, 2, 'two');
      expect(square).toHaveBeenNthCalledWith(2, 3, 0);
      expect(square).toHaveBeenNthCalledWith(3, 6, 1);
    });
  });

  describe('deepMapKeys()', () => {
    const transform = (key: string) => key.toUpperCase();

    it('transforms keys of simple object', () => {
      expect(deepMapKeys({ one: 1, two: 2 }, transform)).toEqual({ ONE: 1, TWO: 2 });
    });

    it('transforms keys of object with nested objects/arrays', () => {
      expect(deepMapKeys({ one: 1, obj: { two: 2, three: 3 }, arr: [4, 5] }, transform)).toEqual({
        ONE: 1,
        OBJ: { TWO: 2, THREE: 3 },
        ARR: [4, 5],
      });
    });

    it('transforms keys of array with nested object/array', () => {
      expect(deepMapKeys([1, { two: 2, three: 3, arr: [4, { five: 5 }] }], transform)).toEqual([1, { TWO: 2, THREE: 3, ARR: [4, { FIVE: 5 }] }]);
    });

    it('transforms an object with circular references', () => {
      const obj = { one: 1, arr: [2, 3], self: null as any, arr2: [] as any[] };
      obj.self = obj;
      obj.arr2 = obj.arr;

      const exp = { ONE: 1, ARR: [2, 3], SELF: null as any, ARR2: [] as any[] };
      exp.SELF = exp;
      exp.ARR2 = exp.ARR;

      expect(deepMapKeys(obj, transform)).toEqual(exp);
    });

    it('mapFunction is called once per object property', () => {
      const caps = jest.fn(transform);

      deepMapKeys({ one: 1, obj: { two: 2, three: 3 }, arr: [4, 5] }, caps);

      expect(caps).toHaveBeenCalledTimes(5);
    });

    it('mapFunction is called with key and value', () => {
      const caps = jest.fn(transform);

      deepMapKeys({ one: 1, arr: [2, 3] }, caps);

      expect(caps).toHaveBeenNthCalledWith(1, 'one', 1);
      expect(caps).toHaveBeenNthCalledWith(2, 'arr', [2, 3]);
    });
  });
});
