import { Nullish } from '@/types';

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

export const findUnion = <T>(lhs: T[], rhs: T[]): { rhsOnly: T[]; lhsOnly: T[]; union: T[] } => {
  const unique = new Set([...lhs, ...rhs]);

  return Array.from(unique).reduce<{ lhsOnly: T[]; rhsOnly: T[]; union: T[] }>(
    (acc, item) => {
      if (lhs.includes(item)) {
        if (rhs.includes(item)) {
          acc.union.push(item);
        } else {
          acc.lhsOnly.push(item);
        }
      } else {
        acc.rhsOnly.push(item);
      }

      return acc;
    },
    { rhsOnly: [], lhsOnly: [], union: [] }
  );
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
export const filterAndGetLastRemovedValue = <T>(list: T[], filterFunc: (item: T) => boolean): [T[], T | null] => {
  let lastItem: T | null = null;
  const filteredList = list.filter((a) => {
    if (filterFunc(a)) return true;
    lastItem = a;
    return false;
  });
  return [filteredList, lastItem];
};

type ArrayElem<A> = A extends Array<infer Elem> ? Elem : never;
export const inferUnion = <T>(array: T): Array<ArrayElem<T>> => array as any as Array<ArrayElem<T>>;
