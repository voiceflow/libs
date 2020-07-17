import * as s from 'superstruct';

import type { BaseScheme, SchemeType } from '@/types';

// eslint-disable-next-line import/prefer-default-export
export const createPutAndPostStruct = <S extends BaseScheme, K extends keyof SchemeType<S>>(
  schema: S,
  idKey: K
): s.Struct<Omit<S, K | 'created'>> => {
  const { [idKey]: _, created, ...localCreateScheme } = schema;

  return s.type(localCreateScheme);
};
