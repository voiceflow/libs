import {
  hasProperty,
  isObject,
  mapValue,
  omit,
  omitBy,
  pick,
  pickBy,
  selectField,
  selectID,
  selectKey,
  selectValue,
} from '@common/utils/object/common';
import { expect } from 'chai';

describe('Utils | object | common', () => {
  describe('selectField()', () => {
    it('creates function', () => {
      expect(typeof selectField('field')).to.eql('function');
    });

    it('works', () => {
      expect(selectField('field')({ field: 1 })).to.eql(1);
      expect(selectField('field2')({ field1: 1, field2: 2 })).to.eql(2);
    });
  });

  describe('selectID()', () => {
    it('works', () => {
      expect(selectID({ id: '1' })).to.eql('1');
      expect(selectID({ id: 0 })).to.eql(0);
    });
  });

  describe('selectKey()', () => {
    it('works', () => {
      expect(selectKey({ key: '1' })).to.eql('1');
      expect(selectKey({ key: 0 })).to.eql(0);
    });
  });

  describe('selectValue()', () => {
    it('works', () => {
      expect(selectValue({ value: '1' })).to.eql('1');
      expect(selectValue({ value: 0 })).to.eql(0);
    });
  });

  describe('isObject()', () => {
    it('works positive', () => {
      expect(isObject({})).to.eql(true);
      expect(isObject({})).to.eql(true);
      expect(isObject([])).to.eql(true);
      // eslint-disable-next-line no-new-wrappers
      expect(isObject(new Number(1))).to.eql(true);
    });

    it('works negative', () => {
      expect(isObject(null)).to.eql(false);
      expect(isObject(undefined)).to.eql(false);
      expect(isObject('')).to.eql(false);
      expect(isObject('lorem')).to.eql(false);
      expect(isObject(0)).to.eql(false);
      expect(isObject(Symbol('s'))).to.eql(false);
    });
  });

  describe('hasProperty()', () => {
    it('works', () => {
      expect(hasProperty({ value: '1' }, 'value')).to.eql(true);
      expect(hasProperty({}, 'key')).to.eql(false);
    });
  });

  describe('omit()', () => {
    it('works with 0-2 keys', () => {
      expect(omit({ value1: '1' }, [])).to.eql({ value1: '1' });
      expect(omit({ value1: '1' }, ['value1'])).to.eql({});
      expect(omit({ value1: '1', value2: '2', value3: 3 }, ['value1', 'value2'])).to.eql({ value3: 3 });
    });

    it('works with 2+ keys', () => {
      expect(omit({ value1: '1', value2: '2', value3: 3 }, ['value1', 'value2', 'value3'])).to.eql({});
      expect(omit({ value1: '1', value2: '2', value3: 3, value4: undefined, value5: null }, ['value1', 'value2', 'value3', 'value5'])).to.eql({
        value4: undefined,
      });
    });
  });

  describe('pick()', () => {
    it('works with 0-2 keys', () => {
      expect(pick({ value1: '1' }, [])).to.eql({});
      expect(pick({ value1: '1' }, ['value1'])).to.eql({ value1: '1' });
      expect(pick({ value1: '1', value2: '2', value3: 3 }, ['value1', 'value2'])).to.eql({ value1: '1', value2: '2' });
    });

    it('works with 2+ keys', () => {
      expect(pick({ value1: '1', value2: '2', value3: 3 }, ['value1', 'value2', 'value3'])).to.eql({ value1: '1', value2: '2', value3: 3 });
      expect(pick({ value1: '1', value2: '2', value3: 3, value4: undefined, value5: null }, ['value1', 'value2', 'value3', 'value5'])).to.eql({
        value1: '1',
        value2: '2',
        value3: 3,
        value5: null,
      });
    });
  });

  describe('omitBy()', () => {
    it('works', () => {
      const keys = new Set(['value1', 'value2', 'value5']);

      expect(omitBy({ value1: '1' }, () => false)).to.eql({ value1: '1' });
      expect(omitBy({ value1: '1' }, (key) => keys.has(key))).to.eql({});
      expect(omitBy({ value1: '1', value2: '2', value3: 3 }, (key) => keys.has(key))).to.eql({ value3: 3 });
      expect(omitBy({ value1: '1', value2: '2', value3: 3 }, (key) => key === 'value3' || keys.has(key))).to.eql({});
      expect(omitBy({ value1: '1', value2: '2', value3: 3, value4: undefined, value5: null }, (key) => keys.has(key))).to.eql({
        value3: 3,
        value4: undefined,
      });
    });
  });

  describe('pickBy()', () => {
    it('works', () => {
      const keys = new Set(['value1', 'value2', 'value5']);

      expect(pickBy({ value1: '1' }, () => false)).to.eql({});
      expect(pickBy({ value1: '1' }, (key) => keys.has(key))).to.eql({ value1: '1' });
      expect(pickBy({ value1: '1', value2: '2', value3: 3 }, (key) => keys.has(key))).to.eql({
        value1: '1',
        value2: '2',
      });
      expect(pickBy({ value1: '1', value2: '2', value3: 3 }, (key) => key === 'value3' || keys.has(key))).to.eql({
        value1: '1',
        value2: '2',
        value3: 3,
      });
      expect(pickBy({ value1: '1', value2: '2', value3: 3, value4: undefined, value5: null }, (key) => keys.has(key))).to.eql({
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

      expect(mapValue(objects, ({ id }) => id)).to.eql({ a: 1, b: 2, c: 3 });
    });
  });
});
