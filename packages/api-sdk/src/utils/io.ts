import * as t from 'io-ts';

export const stringEnum = <T>(enumObj: T, enumName = 'enum'): t.Type<T[keyof T], string> =>
  new t.Type<T[keyof T], string>(
    enumName,
    (u): u is T[keyof T] => Object.values(enumObj).includes(u),
    (u, c) => (Object.values(enumObj).includes(u) ? t.success(u as T[keyof T]) : t.failure(u, c)),
    (a) => (a as unknown) as string
  );

export const omit = <T extends Record<string, t.Mixed>, K extends keyof T>(props: T, ...keys: K[]): Omit<T, K> => {
  return Object.keys(props).reduce<Omit<T, K>>((acc, key) => {
    if (keys.includes(key as K)) {
      return acc;
    }

    return Object.assign(acc, { [key]: props[key] });
  }, {} as Omit<T, K>);
};
