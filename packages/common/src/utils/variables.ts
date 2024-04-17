import { READABLE_VARIABLE_REGEXP } from '@common/constants';

export const variableReplacer = (
  match: string,
  inner: string,
  variables: Record<string, unknown>,
  modifier?: (variable: unknown) => unknown
): unknown => {
  if (inner in variables) {
    return typeof modifier === 'function' ? modifier(variables[inner]) : variables[inner];
  }

  return match;
};

export const replaceVariables = (
  phrase: string | undefined | null,
  variables: Record<string, unknown>,
  modifier: ((variable: unknown) => unknown) | undefined = undefined,
  { trim = true }: { trim?: boolean } = {}
): string => {
  if (!phrase || (trim && !phrase.trim())) {
    return '';
  }

  return phrase.replace(READABLE_VARIABLE_REGEXP, (match, inner) =>
    String(variableReplacer(match, inner, variables, modifier))
  );
};

// turn float variables to 2 decimal places
export const sanitizeVariables = (variables: Record<string, unknown>): Record<string, unknown> =>
  Object.entries(variables).reduce<Record<string, unknown>>((acc, [key, value]) => {
    if (typeof value === 'number' && !Number.isInteger(value)) {
      acc[key] = (value as number).toFixed(2);
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
