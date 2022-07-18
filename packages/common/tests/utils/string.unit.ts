import {
  arrayStringReplace,
  capitalizeAllWords,
  capitalizeFirstLetter,
  conditionalReplace,
  removeTrailingUnderscores,
  stripHTMLTags,
} from '@common/utils/string';
import { expect } from 'chai';

describe('Utils | string', () => {
  describe('capitalizeFirstLetter()', () => {
    it('capitalizes the first letter', () => {
      expect(capitalizeFirstLetter('')).to.eq('');
      expect(capitalizeFirstLetter('123')).to.eq('123');
      expect(capitalizeFirstLetter('abc')).to.eq('Abc');
    });
  });

  describe('capitalizeAllWords()', () => {
    it('capitalizes all the space-delimited words', () => {
      expect(capitalizeAllWords('')).to.eq('');
      expect(capitalizeAllWords('abc')).to.eq('Abc');
      expect(capitalizeAllWords('abc def')).to.eq('Abc Def');
    });
  });

  describe('arrayStringReplace()', () => {
    it('replace a pattern for each item in an array', () => {
      expect(arrayStringReplace('x', 'y', [])).to.eql([]);
      expect(arrayStringReplace('x', 'y', ['foo'])).to.eql(['foo']);
      expect(arrayStringReplace('x', 'y', ['xyz', 'foo', 'fox', 'bar'])).to.eql(['yyz', 'foo', 'foy', 'bar']);
    });
  });

  describe('stripHTMLTags()', () => {
    it('remove HTML tags from a string', () => {
      expect(stripHTMLTags('')).to.eq('');
      expect(stripHTMLTags('<')).to.eq('<');
      expect(stripHTMLTags('<>')).to.eq('<>');
      expect(stripHTMLTags('<foo>')).to.eq('');
      expect(stripHTMLTags('a b c d')).to.eq('a b c d');
      expect(stripHTMLTags('a <foo> b <bar> c <fizz> d')).to.eq('a  b  c  d');
    });
  });

  describe('removeTrailingUnderscores()', () => {
    it('remove leading and trailing underscore characters', () => {
      expect(removeTrailingUnderscores('')).to.eq('');
      expect(removeTrailingUnderscores('foo')).to.eq('foo');
      expect(removeTrailingUnderscores('__foo')).to.eq('foo');
      expect(removeTrailingUnderscores('foo__')).to.eq('foo');
      expect(removeTrailingUnderscores('__foo__')).to.eq('foo');
    });
  });

  describe('conditionalReplace()', () => {
    it('do nothing with falsey value', () => {
      expect(conditionalReplace('fizz', /i/)).to.eq('fizz');
    });

    it('use truthy value as replacement value', () => {
      expect(conditionalReplace('fizz', /i/, 'u')).to.eq('fuzz');
    });
  });
});
