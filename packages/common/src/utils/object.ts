import _cloneDeep from 'lodash/cloneDeep';
import _isObject from 'lodash/isObject';
import _toPath from 'lodash/toPath';
import _transform from 'lodash/transform';

export const getKeys = <T>(obj: T): (keyof T)[] => Object.keys(obj) as (keyof T)[];

export const pick = <T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> =>
  keys.reduce((acc, key) => Object.assign(acc, { [key]: obj[key] }), {} as Pick<T, K>);

export const hasProperty = <T, K extends keyof T | string>(obj: T, key: K): obj is T & Record<K, unknown> =>
  Object.prototype.hasOwnProperty.call(obj, key);

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

export const setIn = (obj: Record<string, unknown>, path: any, value: any) => {
  const res = {};
  const pathArray = _toPath(path);
  let resVal: any = res;
  let i = 0;

  for (; i < pathArray.length - 1; i++) {
    const currentPath = pathArray[i];
    const currentObj = getIn(obj, pathArray.slice(0, i + 1));

    if (resVal[currentPath]) {
      resVal = resVal[currentPath];
    } else if (currentObj) {
      resVal[currentPath] = _cloneDeep(currentObj);
      resVal = resVal[currentPath];
    } else {
      const nextPath = pathArray[i + 1];

      resVal[currentPath] = +nextPath >= 0 ? [] : {};
      resVal = resVal[currentPath];
    }
  }

  if ((i === 0 ? obj : resVal)[pathArray[i]] === value) {
    return obj;
  }

  if (value === undefined) {
    delete resVal[pathArray[i]];
  } else {
    resVal[pathArray[i]] = value;
  }

  const result: any = { ...obj, ...res };

  if (i === 0 && value === undefined) {
    delete result[pathArray[i]];
  }

  return result;
};

export const filterEntries = (obj: Record<string, any>, predicate: any) =>
  Object.entries(obj).reduce<any>((acc, [key, value]) => {
    if (predicate(key, value)) {
      acc[key] = value;
    }

    return acc;
  }, {});

export const getDiff = (object: Record<string, any>, base: Record<string, any>) => {
  const changes = (object: Record<string, any>, base: Record<string, any>) =>
    _transform(object, (result, value, key) => {
      if (value !== base[key]) {
        // eslint-disable-next-line no-param-reassign
        (result as any)[key] = _isObject(value) && _isObject(base[key]) ? changes(value, base[key]) : value;
      }
    });
  return changes(object, base);
};

export const getTopLevelDiff = (object: any, base: any) => {
  const changes = (object: any, base: any) =>
    _transform(object, (result, value, key) => {
      if (value !== base[key]) {
        // eslint-disable-next-line no-param-reassign
        (result as any)[key] = value;
      }
    });
  return changes(object, base);
};
