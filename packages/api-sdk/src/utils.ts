import * as s from 'superstruct';

import type { BaseSchema, PutPostStruct, SchemeType } from '@/types';

export const dynamicObject = <S extends BaseSchema>(schema: S): s.Struct<Record<string, any> & SchemeType<S>, S> => {
  const Struct = s.object(schema);

  Struct.validator = function* validator(value, ctx) {
    const knowns = Object.keys(Struct.schema);

    if (typeof value !== 'object' || value == null) {
      yield ctx.fail();
    } else {
      // eslint-disable-next-line no-restricted-syntax
      for (const key of knowns) {
        const Value = Struct.schema[key as keyof typeof Struct.schema];
        const v = value[key as keyof typeof value];

        yield* ctx.check(v, Value, value, key);
      }
    }
  };

  return Struct;
};

export const createPutAndPostStruct = <S extends BaseSchema, K extends keyof SchemeType<S>, E extends keyof SchemeType<S> = never>(
  schema: S,
  idKey: K,
  excludedKeys: E[],
  isDynamic?: boolean
): PutPostStruct<S, K, E> => {
  const createScheme = Object.keys(schema)
    .filter((key) => key !== idKey && !excludedKeys.includes(key as E))
    .reduce<Omit<S, K | E>>((acc, key) => Object.assign(acc, { [key]: schema[key] }), {} as Omit<S, K | E>);

  return isDynamic
    ? dynamicObject({ ...createScheme, [idKey]: s.optional(schema[idKey as string]) })
    : (s.object({ ...createScheme, [idKey]: s.optional(schema[idKey as string]) }) as any);
};

export const getWindow = () => {
  return typeof window === 'undefined' ? null : window;
};
