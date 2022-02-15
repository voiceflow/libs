import { AnyRecord, DeepPartial } from '@common/types';
import _transform from 'lodash/transform';

import { isObject } from './common';

const defaultCompare = <T>(left: T, right: T): boolean => left === right;

export const getDiff = <S extends AnyRecord>(object: S, base: S, compare = defaultCompare): DeepPartial<S> => {
  const changes = <T extends AnyRecord>(object: T, base: T) =>
    _transform<T, DeepPartial<T>>(object, (result, value, key) => {
      if (!compare(value, base[key])) {
        if (isObject(value) && isObject(base[key])) {
          // eslint-disable-next-line no-param-reassign
          result[key] = changes(value, base[key]) as T extends object ? DeepPartial<T[keyof T]> : T;

          if (Object.keys(result[key] ?? {}).length === 0) {
            // eslint-disable-next-line no-param-reassign
            delete result[key];
          }
        } else {
          // eslint-disable-next-line no-param-reassign
          result[key] = value;
        }
      }
    });

  return changes(object, base);
};

export const getTopLevelDiff = <S extends AnyRecord>(object: S, base: S, compare = defaultCompare): Partial<S> => {
  const changes = (object: S, base: S) =>
    _transform<S, Partial<S>>(object, (result, value, key) => {
      if (!compare(value, base[key])) {
        // eslint-disable-next-line no-param-reassign
        result[key] = value;
      }
    });

  return changes(object, base);
};
