import { Struct } from '@common/types';

import { isObject } from './common';

export const deepMap = <T = Struct>(
  object: unknown,
  mapFunction: (value: unknown, key: string | number) => unknown,
  options: { inPlace?: boolean } = {}
): T => {
  const cache = new WeakMap<object, unknown>();

  const mapArray = (arr: unknown[]): unknown[] => {
    if (cache.has(arr)) {
      return cache.get(arr) as unknown[];
    }

    const result = options.inPlace ? arr : [];

    cache.set(arr, result);

    const { length } = arr;
    for (let index = 0; index < length; index++) {
      result[index] = map(arr[index], index);
    }

    return result;
  };

  const mapObject = (obj: Struct): Struct => {
    if (cache.has(obj)) {
      return cache.get(obj) as Struct;
    }

    const result = options.inPlace ? obj : {};

    cache.set(obj, result);

    // eslint-disable-next-line no-restricted-syntax
    for (const key of Object.keys(obj)) {
      result[key] = map(obj[key], key);
    }

    return result;
  };

  const map = (value: unknown, key?: string | number) => {
    if (Array.isArray(value)) return mapArray(value);
    if (isObject(value)) return mapObject(value);

    return mapFunction(value, key!);
  };

  return map(object) as T;
};

export const deepMapKeys = <T = Struct>(object: unknown, mapFunction: (key: string, value: unknown) => string): T => {
  const cache = new WeakMap<object, unknown>();

  const mapArray = (arr: unknown[]): unknown[] => {
    if (cache.has(arr)) {
      return cache.get(arr) as unknown[];
    }

    const result: unknown[] = [];

    cache.set(arr, result);

    const { length } = arr;
    for (let i = 0; i < length; i++) {
      result.push(map(arr[i]));
    }

    return result;
  };

  const mapObject = (obj: Struct): Struct => {
    if (cache.has(obj)) {
      return cache.get(obj) as Struct;
    }

    const result: Struct = {};

    cache.set(obj, result);

    // eslint-disable-next-line no-restricted-syntax
    for (const key of Object.keys(obj)) {
      result[mapFunction(key, obj[key])] = map(obj[key]);
    }

    return result;
  };

  const map = (value: unknown) => {
    if (Array.isArray(value)) return mapArray(value);
    if (isObject(value)) return mapObject(value);

    return value;
  };

  return map(object) as T;
};
