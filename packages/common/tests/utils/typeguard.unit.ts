import { createTypedTypeguardCreator, createTypeguardCreator } from '@common/utils/typeguard';
import { expect } from 'chai';

describe('Utils | typeguard', () => {
  describe('createTypeguardCreator()', () => {
    it('casts the guarded argument', () => {
      const createTypeguard = createTypeguardCreator<string>();
      const input: unknown = 'foo';
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const assertTyped = (_arg: 'foo') => undefined;

      const typeguard = createTypeguard('foo');

      if (typeguard(input)) {
        assertTyped(input);
      }
    });

    it('typeguard against a single value', () => {
      const createTypeguard = createTypeguardCreator<string>();

      const typeguard = createTypeguard('foo');

      expect(typeguard('foo')).to.be.true;
      expect(typeguard('bar')).to.be.false;
    });

    it('typeguard against an array of values', () => {
      const createTypeguard = createTypeguardCreator<string>();

      const typeguard = createTypeguard(['foo', 'bar']);

      expect(typeguard('foo')).to.be.true;
      expect(typeguard('bar')).to.be.true;
      expect(typeguard('fizz')).to.be.false;
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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const assertTyped = (_arg: { type: 'foo' }) => undefined;

      const typeguard = createTypeguard('foo');

      if (typeguard(input)) {
        assertTyped(input);
      }
    });

    it('typeguard against a single value', () => {
      const createTypeguard = createTypedTypeguardCreator<TypedValue>();

      const typeguard = createTypeguard('foo');

      expect(typeguard({ type: 'foo', id: 1 })).to.be.true;
      expect(typeguard({ type: 'bar', id: 2 })).to.be.false;
    });

    it('typeguard against an array of values', () => {
      const createTypeguard = createTypedTypeguardCreator<TypedValue>();

      const typeguard = createTypeguard(['foo', 'bar']);

      expect(typeguard({ type: 'foo', id: 1 })).to.be.true;
      expect(typeguard({ type: 'bar', id: 2 })).to.be.true;
      expect(typeguard({ type: 'fizz', id: 3 })).to.be.false;
    });
  });
});
