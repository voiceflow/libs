import { Normalized } from '@common/types';

import { stringify } from './functional';
import { hasProperty } from './object';

export interface ObjectWithId {
  id: number | string;
}

export interface RemoveNormalizedByKey {
  <T>(normalized: Normalized<T>, targetKey: string): Normalized<T>;
  <T extends Normalized<any>>(normalized: T, targetKey: string): T;
}

export interface GetNormalizedByKey {
  <T>({ byKey }: Normalized<T>, key: string): T;
  <T extends Normalized<any>>({ byKey }: T, key: string): T extends Normalized<infer R> ? R : never;
}

export interface SafeGetNormalizedByKey {
  <T>({ byKey }: Normalized<T>, key: string): T | null;
  <T extends Normalized<any>>({ byKey }: T, key: string): T extends Normalized<infer R> ? R | null : never;
}

const createEmptyNormalized = (): Normalized<any> => ({ byKey: {}, allKeys: [] });
export const EMPTY = createEmptyNormalized();

export type GetKey<T> = (obj: T, index?: number, array?: T[]) => string;
export type GetKeyFromMap<T> = (obj: T, index: number, array: T[]) => string;

export const defaultGetKey = <T extends ObjectWithId>(obj: T) => stringify(obj.id);

/**
 * @deprecated prefer `normal-store`
 */
export const safeAdd = <T>(items: T[], obj: T) => (items.includes(obj) ? items : [...items, obj]);

const safeAddToStart = <T>(items: T[], obj: T) => (items.includes(obj) ? items : [obj, ...items]);

export const getByIndex =
  <T>(items: T[]) =>
  (_: string, index: number): T =>
    items[index];

export const getByKey =
  <T>(lookup: Record<string, T>) =>
  (key: string) =>
    lookup[key];

export const buildLookup = <T>(allKeys: string[], getValue: (key: string, index: number) => T) =>
  allKeys.reduce<Record<string, T>>((acc, key, index) => {
    acc[key] = getValue(key, index);

    return acc;
  }, {});

/**
 * @deprecated prefer `normal-store`
 */
export const normalize = <T extends ObjectWithId | unknown>(items: T[], getKey?: GetKeyFromMap<T>): Normalized<T> => {
  const allKeys = items.map(getKey ?? (defaultGetKey as GetKeyFromMap<T>));

  return {
    byKey: buildLookup<T>(allKeys, getByIndex<T>(items)),
    allKeys,
  };
};

/**
 * @deprecated prefer `normal-store`
 */
export const denormalize = <T>({ allKeys, byKey }: Normalized<T>) => allKeys.map((key) => byKey[key]);

/**
 * @deprecated prefer `normal-store`
 */
export const getNormalizedByKey: GetNormalizedByKey = <T>({ byKey }: Normalized<T>, key: string) => byKey[key];

/**
 * @deprecated prefer `normal-store`
 */
export const safeGetNormalizedByKey: SafeGetNormalizedByKey = <T>({ byKey }: Normalized<T>, key: string) =>
  hasProperty(byKey, key) ? byKey[key] : null;

/**
 * @deprecated prefer `normal-store`
 */
export const getAllNormalizedByKeys = <T>({ byKey }: Normalized<T>, keys: string[]) => keys.map((key) => byKey[key]);

/**
 * @deprecated prefer `normal-store`
 */
export const updateNormalizedByKey = <T, N extends Normalized<T>>({ byKey, ...rest }: N, key: string, obj: T) =>
  ({
    ...rest,
    byKey: { ...byKey, [key]: obj },
  } as N);

/**
 * @deprecated prefer `normal-store`
 */
export const addNormalizedByKey = <T>(normalized: Normalized<T>, key: string, obj: T) => ({
  ...updateNormalizedByKey(normalized, key, obj),
  allKeys: safeAdd(normalized.allKeys, key),
});

/**
 * @deprecated prefer `normal-store`
 */
export const addToStartNormalizedByKey = <T>(normalized: Normalized<T>, key: string, obj: T) => ({
  ...updateNormalizedByKey(normalized, key, obj),
  allKeys: safeAddToStart(normalized.allKeys, key),
});

/**
 * @deprecated prefer `normal-store`
 */
export const addAllNormalizedByKeys = <T extends ObjectWithId | unknown, K extends GetKey<T> = (obj: T) => string>(
  normalized: Normalized<T>,
  objs: T[],
  getKey?: K
): Normalized<T> => {
  const keyGetter = getKey ?? (defaultGetKey as unknown as K);
  const keys = objs.map(keyGetter);

  return {
    byKey: {
      ...normalized.byKey,
      ...objs.reduce<Record<string, T>>((acc, obj) => Object.assign(acc, { [keyGetter(obj)]: obj }), {}),
    },
    allKeys: keys.reduce(safeAdd, normalized.allKeys),
  };
};

/**
 * @deprecated prefer `normal-store`
 */
export const reorderKeys = <T>(newKeyArray: string[], byKey: Record<string, T>): Normalized<T> => ({
  allKeys: newKeyArray,
  byKey,
});
