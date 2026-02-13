import { READABLE_VARIABLE_REGEXP, VARIABLE_ONLY_REGEXP } from '@common/constants';
import _get from 'lodash/get.js';

export const variableReplacer = (
  match: string,
  inner: string,
  variables: Record<string, unknown>,
  modifier: (variable: unknown) => unknown = (val) => val
): unknown => {
  const { id, path } = splitVariableName(inner);
  if (!(id in variables)) {
    return match;
  }

  if (!path) {
    return modifier(variables[id]);
  }

  try {
    const variable = typeof variables[id] === 'string' ? JSON.parse(variables[id] as string) : variables[id];

    return modifier(_get(variable, path, 0));
  } catch (err: any) {
    if (err?.message.includes('is not valid JSON')) {
      return 0;
    }
    throw err;
  }
};

export const splitVariableName = (
  inner: string,
  options: { pathWithDotPrefix: boolean } = { pathWithDotPrefix: false }
) => {
  const firstDotIndex = inner.indexOf('.');
  const firstSquareBracketIndex = inner.indexOf('[');

  if (firstDotIndex === -1 && firstSquareBracketIndex === -1) {
    return { id: inner, path: '' };
  }

  if (firstDotIndex !== -1 && firstSquareBracketIndex === -1) {
    return {
      id: inner.slice(0, firstDotIndex),
      path: options.pathWithDotPrefix ? inner.slice(firstDotIndex) : inner.slice(firstDotIndex + 1),
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
      path: options.pathWithDotPrefix ? inner.slice(firstDotIndex) : inner.slice(firstDotIndex + 1),
    };
  }

  return {
    id: inner.slice(0, firstSquareBracketIndex),
    path: inner.slice(firstSquareBracketIndex),
  };
};

export function replaceVariables(
  phrase: string | undefined | null,
  variables: Record<string, unknown>,
  options?: { modifier?: (variable: unknown) => unknown; trim?: boolean; keepTypeIfOnlyVariable?: false }
): string;
export function replaceVariables(
  phrase: string | undefined | null,
  variables: Record<string, unknown>,
  options: { modifier?: (variable: unknown) => unknown; trim?: boolean; keepTypeIfOnlyVariable: true }
): unknown;
export function replaceVariables(
  phrase: string | undefined | null,
  variables: Record<string, unknown>,
  {
    trim = true,
    modifier,
    keepTypeIfOnlyVariable = false,
  }: { modifier?: ((variable: unknown) => unknown) | undefined; trim?: boolean; keepTypeIfOnlyVariable?: boolean } = {}
): string | unknown {
  const stringPhrase = typeof phrase === 'string' ? phrase : String(phrase ?? '');
  const formattedPhrase = trim ? stringPhrase.trim() : phrase;

  if (!formattedPhrase) {
    return '';
  }

  if (keepTypeIfOnlyVariable && formattedPhrase.match(VARIABLE_ONLY_REGEXP)) {
    // remove the curly braces {} from phrase to get the inner
    const inner = formattedPhrase.slice(1, -1);

    return variableReplacer(formattedPhrase, inner, variables, modifier);
  }

  return formattedPhrase.replace(READABLE_VARIABLE_REGEXP, (match, inner) =>
    String(variableReplacer(match, inner, variables, modifier))
  );
}

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

export const deepVariableSubstitution = <T>(
  bodyData: T,
  variableMap: Record<string, unknown>,
  options?: { trim?: boolean; modifier?: (variable: unknown) => unknown; keepTypeIfOnlyVariable?: boolean }
): T => {
  const _recurse = (subCollection: any): any => {
    if (!subCollection) {
      return subCollection;
    }

    if (typeof subCollection === 'string') {
      return replaceVariables(subCollection, variableMap, options as any);
    }

    if (Array.isArray(subCollection)) {
      return subCollection.map((v) => _recurse(v));
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
