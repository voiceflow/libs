import type { AnyRecord } from '@common/types';
import _transform from 'lodash/transform';

const defaultCompare = <T>(left: T, right: T): boolean => left === right;

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
