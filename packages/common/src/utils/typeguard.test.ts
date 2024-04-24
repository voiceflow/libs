import { describe, expect, it } from 'vitest';

import { createTypedTypeguardCreator, createTypeguardCreator } from './typeguard';

describe('Utils | typeguard', () => {
  describe('createTypeguardCreator()', () => {
    it('casts the guarded argument', () => {
      const createTypeguard = createTypeguardCreator<string>();
      const input: unknown = 'foo';

      const assertTyped = (_arg: 'foo') => undefined;

      const typeguard = createTypeguard('foo');

      if (typeguard(input)) {
        assertTyped(input);
      }
    });

    it('typeguard against a single value', () => {
      const createTypeguard = createTypeguardCreator<string>();

      const typeguard = createTypeguard('foo');

      expect(typeguard('foo')).toBe(true);
      expect(typeguard('bar')).toBe(false);
    });

    it('typeguard against an array of values', () => {
      const createTypeguard = createTypeguardCreator<string>();

      const typeguard = createTypeguard(['foo', 'bar']);

      expect(typeguard('foo')).toBe(true);
      expect(typeguard('bar')).toBe(true);
      expect(typeguard('fizz')).toBe(false);
    });
  });

  describe('createTypedTypeguardCreator()', () => {
    interface TypedValue {
      type: 'foo' | 'bar' | 'fizz';
      id: number;
    }

    it('casts the guarded argument', () => {
      const createTypeguard = createTypedTypeguardCreator<TypedValue>();
      const input = { type: 'foo' as const, id: 123 };

      const assertTyped = (_arg: { type: 'foo' }) => undefined;

      const typeguard = createTypeguard('foo');

      if (typeguard(input)) {
        assertTyped(input);
      }
    });

    it('typeguard against a single value', () => {
      const createTypeguard = createTypedTypeguardCreator<TypedValue>();

      const typeguard = createTypeguard('foo');

      expect(typeguard({ type: 'foo', id: 1 })).toBe(true);
      expect(typeguard({ type: 'bar', id: 2 })).toBe(false);
    });

    it('typeguard against an array of values', () => {
      const createTypeguard = createTypedTypeguardCreator<TypedValue>();

      const typeguard = createTypeguard(['foo', 'bar']);

      expect(typeguard({ type: 'foo', id: 1 })).toBe(true);
      expect(typeguard({ type: 'bar', id: 2 })).toBe(true);
      expect(typeguard({ type: 'fizz', id: 3 })).toBe(false);
    });
  });
});
