import { READABLE_VARIABLE_REGEXP, VARIABLE_ONLY_REGEXP } from '@common/constants';
import _get from 'lodash/get.js';

export const variableReplacer = (
  match: string,
  inner: string,
  variables: Record<string, unknown>,
  modifier?: (variable: unknown) => unknown
): unknown => {
  const { id, path } = splitVariableName(inner);
  if (!(id in variables)) {
    return match;
  }

  if (!path) {
    return typeof modifier === 'function' ? modifier(variables[id]) : variables[id];
  }

  try {
    const variable = typeof variables[id] === 'string' ? JSON.parse(variables[id] as string) : variables[id];
    return typeof modifier === 'function' ? modifier(_get(variable, path, 0)) : _get(variable, path, 0);
  } catch (err: any) {
    if (err?.message.includes('is not valid JSON')) {
      return 0;
    }
    throw err;
  }
};

export const splitVariableName = (inner: string) => {
  const firstDotIndex = inner.indexOf('.');
  const firstSquareBracketIndex = inner.indexOf('[');

  if (firstDotIndex === -1 && firstSquareBracketIndex === -1) {
    return { id: inner, path: '' };
  }

  if (firstDotIndex !== -1 && firstSquareBracketIndex === -1) {
    return {
      id: inner.slice(0, firstDotIndex),
      path: inner.slice(firstDotIndex + 1), // skip the dot
    };
  }
  if (firstDotIndex === -1 && firstSquareBracketIndex !== -1) {
    return {
      id: inner.slice(0, firstSquareBracketIndex),
      path: inner.slice(firstSquareBracketIndex),
    };
  }

  if (firstDotIndex < firstSquareBracketIndex) {
    return {
      id: inner.slice(0, firstDotIndex),
      path: inner.slice(firstDotIndex + 1), // skip the dot
    };
  }

  return {
    id: inner.slice(0, firstSquareBracketIndex),
    path: inner.slice(firstSquareBracketIndex),
  };
};

export const replaceVariables = (
  phrase: string | undefined | null,
  variables: Record<string, unknown>,
  modifier: ((variable: unknown) => unknown) | undefined = undefined,
  { trim = true, keepTypeIfOnlyVariable = false }: { trim?: boolean; keepTypeIfOnlyVariable?: boolean } = {}
): string | unknown => {
  if (!phrase || (trim && !phrase.trim())) {
    return '';
  }

  if (keepTypeIfOnlyVariable && phrase.match(VARIABLE_ONLY_REGEXP)) {
    // remove the curly braces {} from phrase to get the inner
    const inner = phrase.slice(1, -1);
    return variableReplacer(phrase, inner, variables, modifier);
  }

  return phrase.replace(READABLE_VARIABLE_REGEXP, (match, inner) =>
    String(variableReplacer(match, inner, variables, modifier))
  );
};

// turn float variables to 4 decimal places
export const sanitizeVariables = (variables: Record<string, unknown>): Record<string, unknown> =>
  Object.entries(variables).reduce<Record<string, unknown>>((acc, [key, value]) => {
    if (typeof value === 'number' && !Number.isInteger(value)) {
      acc[key] = (value as number).toFixed(4);
    } else {
      acc[key] = value;
    }

    return acc;
  }, {});

export const transformStringVariableToNumber = (str: string | number | null): number | string | null => {
  if (typeof str === 'number') {
    return str;
  }

  if (str?.startsWith('0') && str.length > 1) {
    return str;
  }

  const number = Number(str);

  return Number.isNaN(number) ? str : number;
};

export const deepVariableSubstitution = <T>(bodyData: T, variableMap: Record<string, unknown>): T => {
  const _recurse = (subCollection: any, modifier?: (variable: unknown) => unknown): any => {
    if (!subCollection) {
      return subCollection;
    }

    if (typeof subCollection === 'string') {
      return replaceVariables(subCollection, variableMap, modifier);
    }

    if (Array.isArray(subCollection)) {
      return subCollection.map((v) => _recurse(v, modifier));
    }

    if (typeof subCollection === 'object') {
      Object.keys(subCollection).forEach((key) => {
        // eslint-disable-next-line no-param-reassign
        subCollection[key] = _recurse(subCollection[key]);
      });

      return subCollection;
    }

    return subCollection;
  };

  return _recurse(bodyData);
};
