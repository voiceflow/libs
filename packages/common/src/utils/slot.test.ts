import { describe, expect, it } from 'vitest';

import * as SlotUtils from './slot';

describe('Utils | slot', () => {
  describe('getValueWithSynonyms', () => {
    it('extracts synonyms', () => {
      expect(SlotUtils.getValueWithSynonyms('a, b, c, d')).toEqual(['a', ['b', 'c', 'd']]);
    });
  });

  describe('mapSlotAnnotations', () => {
    it('renames keys and maps', () => {
      expect(
        SlotUtils.mapSlotAnnotations('test {{[name].key}} thing', () => ({ key: 'newKey', name: 'newName' }))
      ).toEqual('test {{[newName].newKey}} thing');
    });
  });
});
