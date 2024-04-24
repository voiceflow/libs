import { describe, expect, it, vi } from 'vitest';

import {
  chain,
  chainAsync,
  chainVoid,
  chainVoidAsync,
  compose,
  identity,
  isFunction,
  noop,
  stringify,
  withEffect,
} from './functional';
import { delay } from './promise';

describe('Utils | functional', () => {
  describe('isFunction()', () => {
    it('checks if the provided argument is a function', () => {
      expect(isFunction(null)).toBe(false);
      expect(isFunction({})).toBe(false);
      expect(isFunction(() => null)).toBe(true);
    });
  });

  describe('compose()', () => {
    it('composes from right-to-left', () => {
      const add = (x: number) => x + 1;
      const div = (x: number) => x / 3;
      const mult = (x: number) => x * 2;

      expect(compose(mult, div, add)(5)).toBe(4);
      expect(compose(add, mult, div)(9)).toBe(7);
      expect(compose(mult, add)(6)).toBe(14);
      expect(compose(mult)(6)).toBe(12);
    });
  });

  describe('noop()', () => {
    it('does nothing', () => {
      expect(noop()).toBeUndefined();
    });
  });

  describe('identity()', () => {
    it('returns the input', () => {
      const input = () => null;

      expect(identity(input)).toEqual(input);
    });
  });

  describe('stringify()', () => {
    it('returns the input as a string', () => {
      expect(stringify('foo')).toBe('foo');
      expect(stringify(123)).toBe('123');
    });
  });

  describe('chain()', () => {
    it('chains multiple function calls from left to right', () => {
      let result = 5;
      const outerArgs = ['a', false, -3];
      const add = (...args: any[]) => {
        expect(args).toEqual(outerArgs);
        result += 1;
      };
      const div = (...args: any[]) => {
        expect(args).toEqual(outerArgs);
        result /= 3;
      };
      const mult = (...args: any[]) => {
        expect(args).toEqual(outerArgs);
        result *= 2;
      };

      chain(add, div, mult)(...outerArgs);

      expect(result).toBe(4);

      result = 5;

      chain(add, mult)(...outerArgs);

      expect(result).toBe(12);

      result = 5;

      chain(add)(...outerArgs);

      expect(result).toBe(6);
    });
  });

  describe('chainVoid()', () => {
    it('chains multiple function calls from left to right', () => {
      let result = 5;
      const add = () => {
        result += 1;
      };
      const div = () => {
        result /= 3;
      };
      const mult = () => {
        result *= 2;
      };

      chainVoid(add, div, mult)();

      expect(result).toBe(4);
    });
  });

  describe('chainAsync()', () => {
    it('chains multiple async function calls in sequence from left to right', async () => {
      let result = 5;
      const outerArgs = ['a', false, -3];
      const add = async (...args: any[]) => {
        expect(args).toEqual(outerArgs);
        await delay(1);
        result += 1;
      };
      const div = async (...args: any[]) => {
        expect(args).toEqual(outerArgs);
        await delay(1);
        result /= 3;
      };
      const mult = async (...args: any[]) => {
        expect(args).toEqual(outerArgs);
        await delay(1);
        result *= 2;
      };

      await chainAsync(add, div, mult)(...outerArgs);

      expect(result).toBe(4);

      result = 5;

      await chainAsync(add, mult)(...outerArgs);

      expect(result).toBe(12);

      result = 5;

      await chainAsync(add)(...outerArgs);

      expect(result).toBe(6);
    });
  });

  describe('chainVoidAsync()', () => {
    it('chains multiple async function calls in sequence from left to right', async () => {
      let result = 5;
      const add = async () => {
        await delay(1);
        result += 1;
      };
      const div = async () => {
        await delay(1);
        result /= 3;
      };
      const mult = async () => {
        await delay(1);
        result *= 2;
      };

      await chainVoidAsync(add, div, mult)();

      expect(result).toBe(4);
    });
  });

  describe('withEffect()', () => {
    it('apply effect to a value and return the value', () => {
      const input = 4;
      const spy = vi.fn();

      withEffect(spy)(input);

      expect(spy).toHaveBeenCalledWith(4);
    });
  });
});
