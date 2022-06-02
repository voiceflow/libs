const TAGS_REGEXP = /(<([^>]+)>)/gi;
const TRAILING_UNDERSCORES_REGEXP = /^_+|_+$/g;

export const capitalizeFirstLetter = (value: string): string => value.charAt(0).toUpperCase() + value.slice(1);

export const capitalizeAllWords = (value: string): string => value.split(' ').map(capitalizeFirstLetter).join(' ');

export const arrayStringReplace = (targetString: string, newString: string, stringArray: string[]): string[] =>
  stringArray.map((string: string) => string.replace(targetString, newString));

export const stripHTMLTags = (str: string): string => str.replace(TAGS_REGEXP, '');

export const removeTrailingUnderscores = (str: string): string => str.replace(TRAILING_UNDERSCORES_REGEXP, '');

export const conditionalReplace = (base: string, pattern: RegExp, value?: string) => {
  return value ? base.replace(pattern, value) : base;
};

/**
 * Recursively call String.prototype.replace until the result is unchanged.
 * This is more useful when the `replacer` may end up returning something that should be replaced.
 *
 * For simple "recursive" replacements use the global RegExp flag (`g`) and not this method.
 */
export const recursiveReplace = (str: string, searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string => {
  const replacedString = str.replace(searchValue, replacer);
  if (replacedString === str) return replacedString;
  return recursiveReplace(replacedString, searchValue, replacer);
};
