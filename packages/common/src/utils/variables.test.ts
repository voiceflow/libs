import { describe, expect, it } from 'vitest';

import { replaceVariables, splitVariableName } from './variables';

describe('Utils | variables', () => {
  describe('splitVariableNameName()', () => {
    it('works if no path', () => {
      const { id, path } = splitVariableName('name');
      expect(id).toBe('name');
      expect(path).toBe('');
    });

    it('works with dot notation', () => {
      const { id, path } = splitVariableName('name.first');
      expect(id).toBe('name');
      expect(path).toBe('first');
    });

    it('works with dot notation (and bracket)', () => {
      const { id, path } = splitVariableName('name.first[0].last');
      expect(id).toBe('name');
      expect(path).toBe('first[0].last');
    });

    it('works with bracket notation', () => {
      const { id, path } = splitVariableName('name[0]');
      expect(id).toBe('name');
      expect(path).toBe('[0]');
    });

    it('works with bracket notation (and dot)', () => {
      const { id, path } = splitVariableName('name[0].first.last');
      expect(id).toBe('name');
      expect(path).toBe('[0].first.last');
    });

    it('works with options (just bracket notation)', () => {
      const { id, path } = splitVariableName('name[0]', { pathWithDotPrefix: true });
      expect(id).toBe('name');
      expect(path).toBe('[0]');
    });

    it('works with options (just dot notation)', () => {
      const { id, path } = splitVariableName('name.first.last', { pathWithDotPrefix: true });
      expect(id).toBe('name');
      expect(path).toBe('.first.last');
    });

    it('works with options (both notation)', () => {
      const { id, path } = splitVariableName('name[0].first.last', { pathWithDotPrefix: true });
      expect(id).toBe('name');
      expect(path).toBe('[0].first.last');
    });

    it('works with options (both notation)', () => {
      const { id, path } = splitVariableName('name.first[0].last', { pathWithDotPrefix: true });
      expect(id).toBe('name');
      expect(path).toBe('.first[0].last');
    });
  });

  describe('replaceVariables()', () => {
    it('do with ... ?', () => {
      const variable = 'name';
      const replacedVariable = replaceVariables(`Hello, {${variable}....aasdasd...something}!`, {});
      expect(replacedVariable).toBe('Hello, {name....aasdasd...something}!');
    });
    it('defaults to match if it cant map', () => {
      const variable = 'name';
      const replacedVariable = replaceVariables(`Hello, {${variable}.something}!`, {});
      expect(replacedVariable).toBe('Hello, {name.something}!');
    });

    it('replaces a variable', () => {
      const variable = 'name';
      const replacedVariable = replaceVariables(`Hello, {${variable}}!`, { [variable]: 'world' });
      expect(replacedVariable).toBe('Hello, world!');
    });

    it('replaces an object variable with a path', () => {
      const variable = 'name';
      const replacedVariable = replaceVariables(`Hello, {${variable}.name}!`, { [variable]: { name: 'world' } });
      expect(replacedVariable).toBe('Hello, world!');
    });

    it('replaces an object variable with a complex path', () => {
      const variable = 'name';
      const replacedVariable = replaceVariables(`Hello, {${variable}.users[0].friends[0].name}!`, {
        [variable]: { users: [{ friends: [{ name: 'world' }] }] },
      });
      expect(replacedVariable).toBe('Hello, world!');
    });

    it('replaces an object variable with a complex path (bracket access)', () => {
      const variable = 'name';
      const replacedVariable = replaceVariables(`Hello, {${variable}[0].friends[0].name}!`, {
        [variable]: [{ friends: [{ name: 'world' }] }],
      });
      expect(replacedVariable).toBe('Hello, world!');
    });

    it('replaces an object-like-string variable with a path', () => {
      const variable = 'name';
      const replacedVariable = replaceVariables(`Hello, {${variable}.name}!`, {
        [variable]: '{ "name": invalid-json }',
      });
      expect(replacedVariable).toBe('Hello, 0!');
    });

    it('replaces an object-like-string variable with a complex path', () => {
      const variable = 'name';
      const replacedVariable = replaceVariables(`Hello, {${variable}.users[0].friends[0].name}!`, {
        [variable]: '{ "users": [{ "friends": [{ "name": "world" }] }] }',
      });
      expect(replacedVariable).toBe('Hello, world!');
    });

    it('replaces an object-like-string variable with a complex path (bracket access)', () => {
      const variable = 'name';
      const replacedVariable = replaceVariables(`Hello, {${variable}[0].friends[0].name}!`, {
        [variable]: '[{ "friends": [{ "name": "world" }] }]',
      });
      expect(replacedVariable).toBe('Hello, world!');
    });

    it('works with modifier', () => {
      const variable = 'name';
      const replacedVariable = replaceVariables(
        `{${variable}.name}`,
        { [variable]: { name: 'world' } },
        { modifier: JSON.stringify }
      );
      expect(replacedVariable).toBe('"world"');
    });

    it('returns toString() of path match, even in cases of object', () => {
      const variable = 'name';
      const replacedVariable = replaceVariables(`Hello, {${variable}.name}!`, {
        [variable]: { name: { first: 'john', last: 'doe' } },
      });
      expect(replacedVariable).toBe('Hello, [object Object]!');
    });

    it('returns toString() of path match, even in cases of arrays', () => {
      const variable = 'name';
      const replacedVariable = replaceVariables(`Hello, {${variable}.name}!`, {
        [variable]: { name: ['mr', 'john', 'doe'] },
      });
      expect(replacedVariable).toBe('Hello, mr,john,doe!');
    });
  });
});
