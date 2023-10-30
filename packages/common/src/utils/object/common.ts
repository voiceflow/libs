import { AnyRecord, Struct } from '@common/types';
import _isPlainObject from 'lodash/isPlainObject';

export { default as shallowEquals } from 'shallowequal';

export const selectField =
  <K extends string | number>(field: K) =>
  <T extends { [key in K]: any }>(obj: T): T[K] =>
    obj[field];

export const selectID = selectField('id');

export const selectKey = selectField('key');

export const selectValue = selectField('value');

export const isObject = (obj: unknown): obj is Struct => obj !== null && typeof obj === 'object';

export const isPlainObject = (obj: unknown): obj is Struct => _isPlainObject(obj);

export const hasProperty = <T, K extends keyof T | string>(obj: T, key: K): obj is T & Record<K, unknown> =>
  Object.prototype.hasOwnProperty.call(obj, key);

export const omit = <T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> => {
  const newObj = { ...obj };

  if (keys.length > 3) {
    return keys.reduce((acc, key) => {
      delete acc[key];

      return acc;
    }, newObj) as Omit<T, K>;
  }

  delete newObj[keys[0]];

  if (keys.length === 1) return newObj;

  delete newObj[keys[1]];

  if (keys.length === 2) return newObj;

  delete newObj[keys[2]];

  return newObj;
};

export const pick = <T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> => {
  const newObj = {} as Pick<T, K>;

  if (keys.length > 3) {
    return keys.reduce((acc, key) => {
      if (hasProperty(obj, key)) {
        acc[key] = obj[key];
      }

      return acc;
    }, newObj);
  }

  if (keys.length === 0) return newObj;

  if (hasProperty(obj, keys[0])) {
    newObj[keys[0]] = obj[keys[0]];
  }

  if (keys.length === 1) return newObj;

  if (hasProperty(obj, keys[1])) {
    newObj[keys[1]] = obj[keys[1]];
  }

  if (keys.length === 2) return newObj;

  if (hasProperty(obj, keys[2])) {
    newObj[keys[2]] = obj[keys[2]];
  }

  return newObj;
};

interface PickOmitBy {
  <T extends AnyRecord>(obj: T, predicate: (key: keyof T, value: T[keyof T]) => boolean): Partial<T>;
  <T extends AnyRecord, R extends AnyRecord>(obj: T, predicate: (key: keyof T, value: T[keyof T]) => boolean): R;
}

export const pickBy: PickOmitBy = (obj: AnyRecord, predicate: (key: string, value: unknown) => boolean): AnyRecord =>
  Object.entries(obj).reduce<AnyRecord>((acc, [key, value]) => {
    if (predicate(key, value)) {
      acc[key] = value;
    }

    return acc;
  }, {});

export const omitBy: PickOmitBy = (obj: AnyRecord, predicate: (key: string, value: unknown) => boolean): AnyRecord =>
  Object.entries(obj).reduce<AnyRecord>(
    (acc, [key, value]) => {
      if (predicate(key, value)) {
        delete acc[key];
      }

      return acc;
    },
    { ...obj }
  );

/**
 * @deprecated use pickBy instead
 */
export const filterEntries = pickBy;

export const mapEntry = <T, R>(obj: Record<string | number | symbol, T>, callback: (entry: [key: string, value: T]) => [string, R]) =>
  Object.fromEntries(Object.entries(obj).map(callback));

export const mapValue = <T, R>(obj: Record<string | number | symbol, T>, callback: (value: T) => R) =>
  Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, callback(value)]));

export const shallowPartialEquals = <T extends object>(obj: T, partial: Partial<T>) =>
  Object.entries(partial).every(([key, partialValue]) => hasProperty(obj, key) && partialValue === obj[key]);
