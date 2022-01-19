const mapping = {
  a: 'a',
  b: 'b',
  c: 'c',
  d: 'd',
  e: 'e',
  f: 'f',
  0: 'g',
  1: 'h',
  2: 'i',
  3: 'j',
  4: 'k',
  5: 'l',
  6: 'm',
  7: 'n',
  8: 'o',
  9: 'p',

  // Just in case someone passes a string like 0xabc
  x: 'x',
} as const;

/**
 * Turns a hexadecimal string into lowercase alphabetical characters.
 *
 * @param hex - The hexadecimal string to convert
 * @returns A string of lowercase alphabetical characters
 */
export const hex2abc = (hex: string): string => Array.prototype.map.call(hex.toLowerCase(), (char) => mapping[char as keyof typeof mapping]).join('');
