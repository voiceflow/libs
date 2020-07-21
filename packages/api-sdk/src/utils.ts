import * as s from 'superstruct';

import type { BaseSchema, SchemeType } from '@/types';

export type CreatePutAndPostStruct<S extends BaseSchema, K extends keyof SchemeType<S>> = s.Struct<
  SchemeType<Omit<S, K | 'created'>>,
  Omit<S, K | 'created'>
>;

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

export const createPutAndPostStruct = <S extends BaseSchema, K extends keyof SchemeType<S>>(
  schema: S,
  idKey: K,
  isDynamic?: boolean
): CreatePutAndPostStruct<S, K> => {
  const { [idKey]: _, created, ...localCreateScheme } = schema;

  return isDynamic ? dynamicObject(localCreateScheme) : s.object(localCreateScheme);
};
