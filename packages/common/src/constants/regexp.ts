export const SPACE_REGEXP = / /g;

export const SLOT_REGEXP = /{{\[([^ .[\]{}]*?)]\.([^ .[\]{}]*?)}}/g;

export const SLOT_ANNOTATION_SIMPLE_REGEX = /{([^ .[\]{}]+?)}/g;

export const IS_VARIABLE_REGEXP = /^{.*}$/;

export const READABLE_VARIABLE_REGEXP = /{(\w{1,64})}/g;

export const VALID_CHARACTER = 'a-zA-Z';

// Latin character Unicode points from https://tiny.amazon.com/1hix1tfzz/enwikiorgwikiList
export const VALID_LATIN_CHARACTER = `${VALID_CHARACTER}\xC0-\xFF\u0100-\u017F`;

// Support for latin and asian characters - Consider using library such as
// https://www.npmjs.com/package/unicode-6.3.0#readme
// to generate valid chars. Additional flushing out of this lib would be necessary
export const VALID_SPOKEN_CHARACTER = `${VALID_LATIN_CHARACTER}\u0900-\u0965\u0970-\u097F\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFF9F\u4E00-\u9FAF\u3400-\u4DBF`;

export const VALID_SAMPLE_CHARACTERS_WITHOUT_CURLY_BRACES_OR_SPACES = `${VALID_SPOKEN_CHARACTER}._'\\-`;

export const VALID_SAMPLE_CHARACTERS = `${VALID_SAMPLE_CHARACTERS_WITHOUT_CURLY_BRACES_OR_SPACES} \\[\\]`;

// TYLER: lmao I decompiled the ADC front end source code so these regexes are good as it gets 👌
export const VALID_SAMPLE_UTTERANCE = `[^${VALID_SAMPLE_CHARACTERS}|]`;
