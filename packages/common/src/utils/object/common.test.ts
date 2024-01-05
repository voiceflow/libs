import {
  hasProperty,
  isObject,
  mapEntry,
  mapValue,
  omit,
  omitBy,
  pick,
  pickBy,
  selectField,
  selectID,
  selectKey,
  selectValue,
  shallowPartialEquals,
} from './common';

describe('Utils | object | common', () => {
  describe('selectField()', () => {
    it('creates function', () => {
      expect(typeof selectField('field')).toBe('function');
    });

    it('works', () => {
      expect(selectField('field')({ field: 1 })).toBe(1);
      expect(selectField('field2')({ field1: 1, field2: 2 })).toBe(2);
    });
  });

  describe('selectID()', () => {
    it('works', () => {
      expect(selectID({ id: '1' })).toBe('1');
      expect(selectID({ id: 0 })).toBe(0);
    });
  });

  describe('selectKey()', () => {
    it('works', () => {
      expect(selectKey({ key: '1' })).toBe('1');
      expect(selectKey({ key: 0 })).toBe(0);
    });
  });

  describe('selectValue()', () => {
    it('works', () => {
      expect(selectValue({ value: '1' })).toBe('1');
      expect(selectValue({ value: 0 })).toBe(0);
    });
  });

  describe('isObject()', () => {
    it('works positive', () => {
      expect(isObject({})).toBe(true);
      expect(isObject({})).toBe(true);
      expect(isObject([])).toBe(true);
      // eslint-disable-next-line no-new-wrappers
      expect(isObject(new Number(1))).toBe(true);
    });

    it('works negative', () => {
      expect(isObject(null)).toBe(false);
      expect(isObject(undefined)).toBe(false);
      expect(isObject('')).toBe(false);
      expect(isObject('lorem')).toBe(false);
      expect(isObject(0)).toBe(false);
      expect(isObject(Symbol('s'))).toBe(false);
    });
  });

  describe('hasProperty()', () => {
    it('works', () => {
      expect(hasProperty({ value: '1' }, 'value')).toBe(true);
      expect(hasProperty({}, 'key')).toBe(false);
    });
  });

  describe('omit()', () => {
    it('works with 0-3 keys', () => {
      expect(omit({ value1: '1' }, [])).toEqual({ value1: '1' });
      expect(omit({ value1: '1' }, ['value1'])).toEqual({});
      expect(omit({ value1: '1', value2: '2', value3: 3 }, ['value1', 'value2'])).toEqual({ value3: 3 });
      expect(omit({ value1: '1', value2: '2', value3: 3, value4: 4 }, ['value1', 'value2', 'value3'])).toEqual({ value4: 4 });
    });

    it('works with 3+ keys', () => {
      expect(omit({ value1: '1', value2: '2', value3: 3 }, ['value1', 'value2', 'value3'])).toEqual({});
      expect(omit({ value1: '1', value2: '2', value3: 3, value4: undefined, value5: null }, ['value1', 'value2', 'value3', 'value5'])).toEqual({
        value4: undefined,
      });
    });
  });

  describe('pick()', () => {
    it('works with 0-3 keys', () => {
      expect(pick({ value1: '1' }, [])).toEqual({});
      expect(pick({ value1: '1' }, ['value1'])).toEqual({ value1: '1' });
      expect(pick({ value1: '1', value2: '2', value3: 3 }, ['value1', 'value2'])).toEqual({ value1: '1', value2: '2' });
      expect(pick({ value1: '1', value2: '2', value3: 3, value4: 4 }, ['value1', 'value2', 'value3'])).toEqual({
        value1: '1',
        value2: '2',
        value3: 3,
      });
    });

    it('works with 3+ keys', () => {
      expect(pick({ value1: '1', value2: '2', value3: 3 }, ['value1', 'value2', 'value3'])).toEqual({ value1: '1', value2: '2', value3: 3 });
      expect(pick({ value1: '1', value2: '2', value3: 3, value4: undefined, value5: null }, ['value1', 'value2', 'value3', 'value5'])).toEqual({
        value1: '1',
        value2: '2',
        value3: 3,
        value5: null,
      });
    });

    it('works with undefined keys', () => {
      expect(pick({ value1: '1', value2: '2' } as any, ['value1', 'value2', 'value3'])).toEqual({ value1: '1', value2: '2' });
    });
  });

  describe('omitBy()', () => {
    it('works', () => {
      const keys = new Set(['value1', 'value2', 'value5']);

      expect(omitBy({ value1: '1' }, () => false)).toEqual({ value1: '1' });
      expect(omitBy({ value1: '1' }, (key) => keys.has(key))).toEqual({});
      expect(omitBy({ value1: '1', value2: '2', value3: 3 }, (key) => keys.has(key))).toEqual({ value3: 3 });
      expect(omitBy({ value1: '1', value2: '2', value3: 3 }, (key) => key === 'value3' || keys.has(key))).toEqual({});
      expect(omitBy({ value1: '1', value2: '2', value3: 3, value4: undefined, value5: null }, (key) => keys.has(key))).toEqual({
        value3: 3,
        value4: undefined,
      });
    });
  });

  describe('pickBy()', () => {
    it('works', () => {
      const keys = new Set(['value1', 'value2', 'value5']);

      expect(pickBy({ value1: '1' }, () => false)).toEqual({});
      expect(pickBy({ value1: '1' }, (key) => keys.has(key))).toEqual({ value1: '1' });
      expect(pickBy({ value1: '1', value2: '2', value3: 3 }, (key) => keys.has(key))).toEqual({
        value1: '1',
        value2: '2',
      });
      expect(pickBy({ value1: '1', value2: '2', value3: 3 }, (key) => key === 'value3' || keys.has(key))).toEqual({
        value1: '1',
        value2: '2',
        value3: 3,
      });
      expect(pickBy({ value1: '1', value2: '2', value3: 3, value4: undefined, value5: null }, (key) => keys.has(key))).toEqual({
        value1: '1',
        value2: '2',
        value5: null,
      });
    });
  });

  describe('mapValue()', () => {
    it('works', () => {
      const objects = {
        a: { id: 1 },
        b: { id: 2 },
        c: { id: 3 },
      };

      expect(mapValue(objects, ({ id }) => id)).toEqual({ a: 1, b: 2, c: 3 });
    });
  });

  describe('mapEntry()', () => {
    it('works', () => {
      const objects = {
        a: { id: 1 },
        b: { id: 2 },
        c: { id: 3 },
      };

      expect(mapEntry(objects, ([key, { id }]) => [`new_${key}`, id])).toEqual({ new_a: 1, new_b: 2, new_c: 3 });
    });
  });

  describe('shallowPartialEquals()', () => {
    it('works', () => {
      const obj1 = {
        a: 1,
        b: 2,
      };
      const obj1Update = {
        a: 1,
        c: undefined,
      };

      expect(shallowPartialEquals(obj1, obj1Update)).toBe(false);

      const obj2 = {
        a: 1,
        b: 2,
      };
      const obj2Update = {
        a: 1,
      };

      expect(shallowPartialEquals(obj2, obj2Update)).toBe(true);

      const obj3: any = {
        a: 1,
      };
      const obj3Update = {
        b: 1,
      };

      expect(shallowPartialEquals(obj3, obj3Update)).toBe(false);
    });
  });
});
