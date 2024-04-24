import numberToWords from 'number-to-words/src';

export const NON_ALPHANUMERIC_REGEXP = /\W/g;

export const convertToWord = (value: number): string =>
  numberToWords.toWords(value).replace(NON_ALPHANUMERIC_REGEXP, ' ');

export const isInRange = (target: number, min: number, max: number): boolean => target >= min && target <= max;

export const clamp = (value: number, min: number, max: number): number => Math.max(Math.min(value, max), min);
