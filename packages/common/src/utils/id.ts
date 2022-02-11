import ObjectId from 'bson-objectid';
import cuid from 'cuid';
import deepMap from 'deep-map';
import deepMapKeys from 'deep-map-keys';

import { EmptyObject } from '../types';

export { cuid };

export const objectID = (): string => new ObjectId().toHexString();

export const remapObjectIDs = <T extends Readonly<EmptyObject>>(object: T, lookupMap: Record<string, string> | Map<string, string>): T => {
  const map: ReadonlyMap<string, string> = lookupMap instanceof Map ? lookupMap : new Map(Object.entries(lookupMap));

  const withUpdatedValues = deepMap(object, (value, key) => {
    let newValue = value;

    if (typeof value === 'string' && map.has(value)) {
      newValue = map.get(value)!;
    }

    return newValue;
  });

  const withUpdatedKeys = deepMapKeys(withUpdatedValues, (key) => {
    let newKey = key;

    if (typeof key === 'string' && map.has(key)) {
      newKey = map.get(key)!;
    }

    return newKey;
  });

  return withUpdatedKeys as T;
};
