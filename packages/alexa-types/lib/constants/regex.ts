// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable max-len */

export const validCharacters = 'a-zA-Z';

// Latin character Unicode points from https://tiny.amazon.com/1hix1tfzz/enwikiorgwikiList
export const validLatinChars = `${validCharacters}\xC0-\xFF\u0100-\u017F`;
// const punctuation = '._\'\\-\\{\\}';
// Support for latin and asian characters - Consider using library such as
// https://www.npmjs.com/package/unicode-6.3.0#readme
// to generate valid chars. Additional flushing out of this lib would be necessary
export const validSpokenCharacters = `${validLatinChars}\u0900-\u0965\u0970-\u097F\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFF9F\u4E00-\u9FAF\u3400-\u4DBF`;
// const validSpokenSpanishCharacters = validLatinChars + '\xBF';

// Helper unicode version of regex \w
// const uw = validSpokenCharacters + '0-9_';
// const validLatinCharsAndNumbers = validLatinChars + '0-9_';
// const validIntentNameCharacters = '^[a-zA-Z]+((_[a-zA-Z]+)*|([a-zA-Z]+_)*|_)'; // From https://tiny.amazon.com/17smecjd1/codeamazpackAspSblobea37src
// const validSlotNameCharacters = 'a-zA-Z\\._';
// const validSlotNameString = '[a-zA-Z][' + validSlotNameCharacters + ']*'; // From https://tiny.amazon.com/g5867zfo
// const validSlotTypeNameCharacters = '[a-zA-Z][a-zA-Z\\._]*'; // From https://tiny.amazon.com/14gwu5p7n
export const validSampleCharactersWithoutCurlyBracesOrSpaces = `${validSpokenCharacters}._'\\-`;
export const validSampleCharacters = `${validSampleCharactersWithoutCurlyBracesOrSpaces} \\[\\]`;
// const validPromptCharacters = validSampleCharacters + '\\-,\\?';

// // locale constiations of valid prompt characters
// const validSpanishPromptCharacters = validPromptCharacters + '\xBF';

// const containsNumbers = '[\\d]';

// // Default regex for locales is any unicode letter, possessive apostrophes, periods and spaces.
// // Character check currently supports all locales following EDW logic.
// // Eventually this should be updated to locale specific regex as this allows non en_US locales to put any unicode letters into their invocation name.
// const defaultValidInvocationNameCharacters = '^[' + validSpokenCharacters + '][' + validSpokenCharacters + '.\' \t]*$';

// // Note this regex allows upper case characters. There is a separate validation that checks for upper case.
// const validLocaleSpecificInvocationNameCharacters = {
//     'en_US': '^[' + validCharacters + '][' + validCharacters + '.\'\\s]*$'
// };

// const validLanguageSpecificSpokenCharacters = {
//     'en': '' + validSpokenCharacters,
//     'es': '' + validSpokenSpanishCharacters
// };

// const validLanguageSpecificPromptCharacters = {
//     'en': '' + validPromptCharacters,
//     'es': '' + validSpanishPromptCharacters
// };

// // Types are so open that we are blacklisting instead of whitelisting.
// const curlyBraces = '[\\{\\}]';
// const inValidSlotTypeCharacters = '[\\"]+';
// const inValidSlotTypeLiterals = '^[*]{1}$';
// const whiteSpaceCharacters = '[\\s]+';
// const xmlTag = '<\/?([a-zA-Z:]+)*\\s?\/?>';
// // export const intentUtterance = new RegExp(`(?:[${sampleCharacters}])*$`);

// const STRIP_SLOT_NAME_FROM_TEMPLATE = new RegExp(/\{(.*)\}/);

// const SAFE_SLOT_CHARACTERS = new RegExp('[<>,.@]', 'g');
// const INVALID_REGEX_CHARACTERS = new RegExp('[.?|&;$%@"()+]', 'g');
// const INVALID_REGEX_CHARACTERS_ESCAPE = '\\$&';

// // Decorator Strategies
// const ANY_SPACE = /(\S+)/g;
// const STRING_LITERAL_REGEX = new RegExp('{[' + validSampleCharactersWithoutCurlyBracesOrSpaces + '][' + validSampleCharactersWithoutCurlyBracesOrSpaces + '\\s]*\\|\\s?[' + validSlotNameCharacters + ']+}', 'g');
// const COMPLETE_CURLY_REGEX = new RegExp('{[' + validSlotNameCharacters + ']+}', 'g');
// const PARTIAL_CURLY_REGEX = new RegExp('{[' + validSlotNameCharacters + ']*$', 'g');
// const ERROR_OPEN_NO_CLOSE_CURLY_REGEX = new RegExp('{[' + validSlotNameCharacters + ']*(?=[^' + validSlotNameCharacters + '}])', 'g');
// const ERROR_OPEN_TOUCHING_CHAR_REGEX = new RegExp('(?=[^s]){' + validSlotNameCharacters + '+', 'g');
// const ERROR_CLOSE_NO_OPEN_CURLY_REGEX = new RegExp('[^' + validSlotNameCharacters + '{][' + validSlotNameCharacters + ']*}', 'g');
// const ERROR_CLOSE_NO_OPEN_CURLY_AT_BEGINNING_OF_LINE_REGEX = new RegExp('^[' + validSlotNameCharacters + ']*}', 'g');

// var onlyValidSampleChars = function onlyValidSampleChars(message) {
//     return function (value, resolve, reject) {
//         var regexString = '[^' + __WEBPACK_IMPORTED_MODULE_3_src_constants_regex__["d" /* validSampleCharacters */] + '|]';
//         if (value.match(regexString)) {
//             return reject(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_astro_src_utils_validations_validation_error__["createValidationError"])(message));
//         }

//         var pipeCount = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_ramda__["match"])(/\|/g, value).length;
//         var literalCount = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_ramda__["match"])(__WEBPACK_IMPORTED_MODULE_3_src_constants_regex__["e" /* STRING_LITERAL_REGEX */], value).length;

//         if (pipeCount !== literalCount) {
//             return reject(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_astro_src_utils_validations_validation_error__["createValidationError"])(message));
//         } else {
//             resolve(value);
//         }
//     };
// }
// TYLER: lmao I decompiled the ADC front end source code so these regexes are good as it gets 👌
export const sampleUtteranceRegex = `[^${validSampleCharacters}|]`;

export const SLOT_REGEXP = /{{\[([^ .[\]{}]*?)]\.([^ .[\]{}]*?)}}/g;

export const IS_VARIABLE_REGEXP = /^{.*}$/;

export const READABLE_VARIABLE_REGEXP = /{([^ .[\]{}]*?)}/g;
