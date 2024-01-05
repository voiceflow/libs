import { getKeys } from './keys';

describe('Utils | object | keys', () => {
  describe('getKeys()', () => {
    it('gets keys with a strict type', () => {
      const foo = Symbol('foo');
      const bar = Symbol('bar');
      const fizz = Symbol('fizz');
      const keys = getKeys({ [foo]: 1, [bar]: 2, [fizz]: 3 });

      // this would throw a compiler error if `keys[0]` was a `string`
      keys[0] === foo;
    });
  });
});
