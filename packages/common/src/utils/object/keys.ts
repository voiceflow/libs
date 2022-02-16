import { AnyRecord } from '@common/types';
import _cloneDeep from 'lodash/cloneDeep';
import _toPath from 'lodash/toPath';

export const getKeys = <T>(obj: T): (keyof T)[] => Object.keys(obj) as (keyof T)[];

export const getIn = <T, K extends keyof T | string>(rawObj: T, key: K | K[], def?: any, index = 0): rawObj is T & Record<K, unknown> => {
  const path = _toPath(key);
  let obj: any = rawObj;
  let i = index;

  if (path.length === 1) {
    return obj[path[0]];
  }

  while (obj && i < path.length) {
    obj = obj[path[i++]];
  }

  return obj === undefined ? def : obj;
};

export const setIn = (obj: AnyRecord, path: unknown, value: unknown) => {
  const res = {};
  const pathArray = _toPath(path);

  let resVal: AnyRecord = res;
  let index = 0;

  for (; index < pathArray.length - 1; index++) {
    const currentPath = pathArray[index];

    if (resVal[currentPath]) {
      resVal = resVal[currentPath];
      continue;
    }

    const currentObj = getIn(obj, pathArray.slice(0, index + 1));

    if (currentObj) {
      resVal[currentPath] = _cloneDeep(currentObj);
      resVal = resVal[currentPath];
    } else {
      const nextPath = pathArray[index + 1];

      resVal[currentPath] = +nextPath >= 0 ? [] : {};
      resVal = resVal[currentPath];
    }
  }

  if ((index === 0 ? obj : resVal)[pathArray[index]] === value) {
    return obj;
  }

  if (value === undefined) {
    delete resVal[pathArray[index]];
  } else {
    resVal[pathArray[index]] = value;
  }

  const result: any = { ...obj, ...res };

  if (index === 0 && value === undefined) {
    delete result[pathArray[index]];
  }

  return result;
};
