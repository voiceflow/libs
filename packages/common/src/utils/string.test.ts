import {
  arrayStringReplace,
  capitalizeAllWords,
  capitalizeFirstLetter,
  conditionalReplace,
  removeTrailingUnderscores,
  stripHTMLTags,
} from './string';

describe('Utils | string', () => {
  describe('capitalizeFirstLetter()', () => {
    it('capitalizes the first letter', () => {
      expect(capitalizeFirstLetter('')).toBe('');
      expect(capitalizeFirstLetter('123')).toBe('123');
      expect(capitalizeFirstLetter('abc')).toBe('Abc');
    });
  });

  describe('capitalizeAllWords()', () => {
    it('capitalizes all the space-delimited words', () => {
      expect(capitalizeAllWords('')).toBe('');
      expect(capitalizeAllWords('abc')).toBe('Abc');
      expect(capitalizeAllWords('abc def')).toBe('Abc Def');
    });
  });

  describe('arrayStringReplace()', () => {
    it('replace a pattern for each item in an array', () => {
      expect(arrayStringReplace('x', 'y', [])).toEqual([]);
      expect(arrayStringReplace('x', 'y', ['foo'])).toEqual(['foo']);
      expect(arrayStringReplace('x', 'y', ['xyz', 'foo', 'fox', 'bar'])).toEqual(['yyz', 'foo', 'foy', 'bar']);
    });
  });

  describe('stripHTMLTags()', () => {
    it('remove HTML tags from a string', () => {
      expect(stripHTMLTags('')).toBe('');
      expect(stripHTMLTags('<')).toBe('<');
      expect(stripHTMLTags('<>')).toBe('<>');
      expect(stripHTMLTags('<foo>')).toBe('');
      expect(stripHTMLTags('a b c d')).toBe('a b c d');
      expect(stripHTMLTags('a <foo> b <bar> c <fizz> d')).toBe('a  b  c  d');
    });
  });

  describe('removeTrailingUnderscores()', () => {
    it('remove leading and trailing underscore characters', () => {
      expect(removeTrailingUnderscores('')).toBe('');
      expect(removeTrailingUnderscores('foo')).toBe('foo');
      expect(removeTrailingUnderscores('__foo')).toBe('foo');
      expect(removeTrailingUnderscores('foo__')).toBe('foo');
      expect(removeTrailingUnderscores('__foo__')).toBe('foo');
    });
  });

  describe('conditionalReplace()', () => {
    it('do nothing with falsey value', () => {
      expect(conditionalReplace('fizz', /i/)).toBe('fizz');
    });

    it('use truthy value as replacement value', () => {
      expect(conditionalReplace('fizz', /i/, 'u')).toBe('fuzz');
    });
  });
});
