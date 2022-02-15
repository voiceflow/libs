import { AnyRecord, ArrayUnionToIntersection, Nullish } from '@common/types';

export const unique = <T>(items: T[]): T[] => Array.from(new Set(items));

export const without = <T>(items: T[], index: number): T[] => (index < 0 ? items : [...items.slice(0, index), ...items.slice(index + 1)]);

export const withoutValue = <T>(items: T[], value: T): T[] => without(items, items.indexOf(value));

export const withoutValues = <T>(items: T[], values: T[]): T[] => items.filter((item) => !values.includes(item));

export const replace = <T>(items: T[], index: number, item: T): T[] =>
  index < 0 ? items : [...items.slice(0, index), item, ...items.slice(index + 1)];

export const insert = <T>(items: T[], index: number, item: T): T[] =>
  index < 0 ? [item, ...items] : [...items.slice(0, index), item, ...items.slice(index)];

export const insertAll = <T>(items: T[], index: number, additionalItems: T[]): T[] =>
  index < 0 ? [...additionalItems, ...items] : [...items.slice(0, index), ...additionalItems, ...items.slice(index)];

export const append = <T>(items: T[], item: T): T[] => (items.includes(item) ? items : [...items, item]);

export const toggleMembership = <T>(items: T[], item: T): T[] => (items.includes(item) ? withoutValue(items, item) : [...items, item]);

export const head = <T>(items: T[]): [T, T[]] => {
  const [first, ...rest] = items;
  return [first, rest];
};

export const tail = <T>(items: T[]): [T[], T] => {
  const last = items[items.length - 1];
  const rest = items.slice(0, -1);
  return [rest, last];
};

export const reorder = <T>(items: T[], fromIndex: number, toIndex: number): T[] => {
  if (fromIndex < 0 || fromIndex >= items.length) {
    return items;
  }

  if (toIndex < 0) {
    return [items[fromIndex], ...without(items, fromIndex)];
  }

  if (toIndex >= items.length) {
    return [...without(items, fromIndex), items[fromIndex]];
  }

  return insert(without(items, fromIndex), toIndex, items[fromIndex]);
};

export const separate = <T>(items: T[], predicate: (item: T, index: number) => boolean): [T[], T[]] =>
  items.reduce<[T[], T[]]>(
    ([passAcc, failAcc], item, index) => {
      if (predicate(item, index)) {
        passAcc.push(item);
      } else {
        failAcc.push(item);
      }

      return [passAcc, failAcc];
    },
    [[], []]
  );

export const createMap = <T extends AnyRecord, K extends string | number = string>(array: T[], getKey: (value: T) => string) =>
  array.reduce<Record<K, T>>((acc, item) => Object.assign(acc, { [getKey(item)]: item }), {} as Record<K, T>);

export const createPrimitiveMap = <T extends string | number | symbol>(array: T[]): Record<T, T> =>
  array.reduce<Record<T, T>>((acc, item) => Object.assign(acc, { [item]: item }), {} as Record<T, T>);

export const findUnion = <T>(lhs: T[], rhs: T[]): { rhsOnly: T[]; lhsOnly: T[]; union: T[] } => {
  const lMap = new Map(lhs.map((item) => [item, true]));
  const rMap = new Map(rhs.map((item) => [item, true]));
  const unionMap = new Map([...lMap.entries(), ...rMap.entries()]);

  const result = { rhsOnly: [] as T[], lhsOnly: [] as T[], union: [] as T[] };

  // eslint-disable-next-line no-restricted-syntax
  for (const [item] of unionMap) {
    if (lMap.has(item)) {
      if (rMap.has(item)) {
        result.union.push(item);
      } else {
        result.lhsOnly.push(item);
      }
    } else {
      result.rhsOnly.push(item);
    }
  }

  return result;
};

export const diff = <T>(lhs: T[], rhs: T[]): T[] => {
  const { lhsOnly, rhsOnly } = findUnion(lhs, rhs);

  return [...lhsOnly, ...rhsOnly];
};

export const hasIdenticalMembers = <T>(lhs: T[], rhs: T[]): boolean => {
  if (lhs.length !== rhs.length) {
    return false;
  }

  if (!lhs.length && !rhs.length) {
    return true;
  }

  return !lhs.some((value) => !rhs.includes(value));
};

export const asyncForEach = async <T>(array: T[], callback: (item: T, index: number, array: T[]) => Promise<void>): Promise<void> => {
  for (let index = 0; index < array.length; index++) {
    // eslint-disable-next-line callback-return,no-await-in-loop
    await callback(array[index], index, array);
  }
};

export const isNullish = (value: unknown): value is Nullish => value === null || value === undefined;

export const isNotNullish = <T>(value: T): value is NonNullable<T> => value !== null && value !== undefined;

/** @deprecated Use `array.filter(isNotNullish)` instead. */
export const filterOutNullish = <T>(items: readonly T[]): Array<NonNullable<T>> => items.filter(isNotNullish);

// mostly just saves us needing to traverse an array twice
export const filterAndGetLastRemovedValue = <T>(list: T[], filter: (item: T) => boolean): [T[], T | null] => {
  let lastItem: T | null = null;

  const filteredList = list.filter((a) => {
    if (filter(a)) return true;

    lastItem = a;

    return false;
  });

  return [filteredList, lastItem];
};

export const inferUnion = <T extends ArrayLike<unknown>>(array: T): ArrayUnionToIntersection<T> => array as unknown as ArrayUnionToIntersection<T>;
