import { cuid } from './id';

const CHARACTERS = Array.from({ length: 26 }).map((_, index) => String.fromCharCode(97 + index));

export const generateHash = (object: unknown): string => {
  const objectStr = typeof object === 'object' ? JSON.stringify(object) : String(object);

  if (objectStr.length === 0) {
    return '';
  }

  let hash = 0;

  for (let i = 0; i < objectStr.length; i++) {
    const chr = objectStr.charCodeAt(i);
    // eslint-disable-next-line no-bitwise
    hash = (hash << 5) - hash + chr;
    // eslint-disable-next-line no-bitwise
    hash |= 0; // Convert to 32bit integer
  }

  return Math.abs(hash).toString();
};

interface Generate {
  hash: (object: unknown) => string;

  oneOf: <T>(options: T[]) => T;

  number: (min?: number, max?: number) => number;

  id: (slug?: boolean) => string;

  string: (length?: number) => string;

  object: <T = string>(entryCount?: number, factory?: () => T) => Record<string, T>;

  array: <T = string>(length?: number, factory?: () => T) => T[];
}

export const generate: Generate = {
  hash: generateHash,

  oneOf: (options) => options[generate.number(0, options.length - 1)],

  number: (min = 0, max = 100) => min + Math.floor(Math.random() * (max - min)),

  id: (slug = true) => (slug ? cuid.slug() : cuid()),

  string: (length = 10) =>
    Array.from({ length })
      .map(() => generate.oneOf(CHARACTERS))
      .join(''),

  object: (entryCount = 3, factory = generate.string as () => any) =>
    Array.from({ length: entryCount })
      .map<[string, any]>(() => [generate.string(), factory()])
      .reduce((acc, [key, value]) => Object.assign(acc, { [key]: value }), {}),

  array: (length = 3, factory = generate.string as () => any) => Array.from({ length }).map(() => factory()),
};
