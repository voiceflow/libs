import { AnyRecord, Struct } from '@common/types';

export { default as shallowEqual } from 'shallowequal';

export const selectField =
  <K extends string | number>(field: K) =>
  <T extends { [key in K]: any }>(obj: T): T[K] =>
    obj[field];

export const selectID = selectField('id');

export const selectKey = selectField('key');

export const selectValue = selectField('value');

export const isObject = (obj: unknown): obj is Struct => obj !== null && typeof obj === 'object';

export const hasProperty = <T, K extends keyof T | string>(obj: T, key: K): obj is T & Record<K, unknown> =>
  Object.prototype.hasOwnProperty.call(obj, key);

export const omit = <T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> => {
  const newObj = { ...obj };

  if (keys.length === 0) {
    return newObj;
  }

  if (keys.length === 1) {
    delete newObj[keys[0]];

    return newObj;
  }

  if (keys.length === 2) {
    delete newObj[keys[0]];
    delete newObj[keys[1]];

    return newObj;
  }

  return keys.reduce((acc, key) => {
    delete acc[key];

    return acc;
  }, newObj) as Omit<T, K>;
};

export const pick = <T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> => {
  if (keys.length === 0) {
    return {} as Pick<T, K>;
  }

  if (keys.length === 1) {
    return { [keys[0]]: obj[keys[0]] } as Pick<T, K>;
  }

  if (keys.length === 2) {
    return { [keys[0]]: obj[keys[0]], [keys[1]]: obj[keys[1]] } as Pick<T, K>;
  }

  return keys.reduce((acc, key) => Object.assign(acc, { [key]: obj[key] }), {} as Pick<T, K>);
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

export const mapValue = <T, R>(obj: Record<string | number | symbol, T>, callback: (value: T) => R) =>
  Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, callback(value)]));

export const shallowPartialEquals = <T extends object>(obj: T, partial: Partial<T>) => {
  return isObject(obj) && isObject(partial) && Object.keys(partial).every((key) => partial[key] === obj[key]);
};
