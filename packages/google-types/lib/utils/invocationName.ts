import { VALID_CHARACTER, VALID_LATIN_CHARACTER, VALID_SPOKEN_CHARACTER } from '@voiceflow/common';

const RESERVED_WORDS = ['ok', 'google', 'launch', 'ask', 'tell', 'load', 'game', 'action', 'assistant', 'skill', 'app'];
const RESERVED_PHRASES = ['exit quit', 'volume up'];

const NON_LATIN_REGIONS = ['ja-JP', 'hi-IN'];

const matchesKeyword = (splitName: string[]) => (keyword: string) => splitName.find((split) => split === keyword.toLowerCase());

// eslint-disable-next-line import/prefer-default-export
export const getInvocationNameError = (name?: string, locales: string[] = []) => {
  if (!name?.trim()) {
    return 'Invocation name required for Google';
  }

  let invalidLocales = locales.filter((locale) => !NON_LATIN_REGIONS.includes(locale)).join(',');

  let error = `[${invalidLocales}] Invocation name may only contain Latin characters, apostrophes, periods and spaces`;
  let characters = VALID_LATIN_CHARACTER;

  if (locales.length === 1 && NON_LATIN_REGIONS.includes(locales[0])) {
    error = 'Invocation name may only contain language characters, apostrophes, periods and spaces';

    characters = VALID_SPOKEN_CHARACTER;
  } else if (locales.some((locale) => locale.includes('en'))) {
    invalidLocales = locales.filter((locale) => locale.includes('en')).join(',');

    error = `[${invalidLocales}] Invocation name may only contain alphabetic characters, apostrophes, periods and spaces`;

    characters = VALID_CHARACTER;
  }

  const validRegex = `[^${characters}.' ]+`;

  const match = name.match(validRegex);
  const splitName = name.toLowerCase().split(' ');

  if (match) {
    return `${error} - Invalid Characters: "${match.join()}"`;
  }

  if (RESERVED_WORDS.some(matchesKeyword(splitName))) {
    return `Invocation name cannot contain reserved words e.g. ${RESERVED_WORDS.join(', ')}`;
  }

  if (RESERVED_PHRASES.some((phrase) => name.match(RegExp(`\b${phrase}\b`)))) {
    return `Invocation name cannot contain reserved phrases e.g. ${RESERVED_PHRASES.join(', ')}`;
  }

  return null;
};
