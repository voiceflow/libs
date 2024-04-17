import { describe, expect, it } from 'vitest';

import { getOrDefault } from './map';

describe('Utils | map', () => {
  describe('getOrDefault', () => {
    it('returns the value at the given key if it exists in the map', () => {
      const map = new Map([['key', 'value']]);

      const value = getOrDefault(map, 'key', 'other');

      expect(value).toBe('value');
    });

    it('inserts and returns the default value if key does not exist in the map', () => {
      const map = new Map<string, string>();

      const value = getOrDefault(map, 'key', 'other');

      expect(value).toBe('other');
    });

    it('inserts and returns the result of the default value function if key does not exist in the map', () => {
      const map = new Map<string, string>();

      const value = getOrDefault(map, 'key', () => 'other');

      expect(value).toBe('other');
    });
  });
});
