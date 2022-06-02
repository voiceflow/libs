import { READABLE_VARIABLE_REGEXP } from '@common/constants';
import { hasProperty } from '@common/utils/object';
import { recursiveReplace } from '@common/utils/string';
import { get } from 'lodash';

const resolveVariableSelectorPath = (variableValue: unknown, trimmedSelectorPath: string, defaultValue?: string) => {
  if (trimmedSelectorPath) {
    return typeof variableValue === 'object' ? get(variableValue, trimmedSelectorPath, defaultValue) : defaultValue;
  }
  return variableValue;
};

export const variableReplacer = (
  matchedString: string,
  variableName: string,
  selectorPath: string,
  variables: Record<string, unknown>,
  modifier?: (variable: unknown) => unknown
): unknown => {
  if (!hasProperty(variables, variableName)) return matchedString;

  const variableValue = variables[variableName];
  const trimmedSelectorPath = selectorPath.startsWith('.') ? selectorPath.substring(1) : selectorPath;

  const resolvedValue = resolveVariableSelectorPath(variableValue, trimmedSelectorPath, matchedString);

  return typeof modifier === 'function' ? modifier(resolvedValue) : resolvedValue;
};

export const replaceVariables = (
  phrase: string | undefined | null,
  variables: Record<string, unknown>,
  modifier?: (variable: unknown) => unknown,
  { trim = true }: { trim?: boolean } = {}
): string => {
  const trimmedPhrase = trim ? phrase?.trim() : phrase;
  if (!trimmedPhrase) return '';

  return recursiveReplace(
    trimmedPhrase,
    READABLE_VARIABLE_REGEXP,
    (matchedString, variableName: string, selectorPath: string) =>
      String(variableReplacer(matchedString, variableName, selectorPath, variables, modifier)),
    10
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
        subCollection[key] =
          key === 'url' ? _recurse(subCollection[key], (variable) => encodeURI(decodeURI(String(variable)))) : _recurse(subCollection[key]);
      });

      return subCollection;
    }

    return subCollection;
  };

  return _recurse(bodyData);
};
