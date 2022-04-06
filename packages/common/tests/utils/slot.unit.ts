import * as SlotUtils from '@common/utils/slot';
import { expect } from 'chai';

describe('Utils | slot', () => {
  describe('getValueWithSynonyms', () => {
    it('extracts synonyms', () => {
      expect(SlotUtils.getValueWithSynonyms('a, b, c, d')).to.eql(['a', ['b', 'c', 'd']]);
    });
  });

  describe('mapSlotAnnotations', () => {
    it('renames keys and maps', () => {
      expect(SlotUtils.mapSlotAnnotations('test {{[name].key}} thing', () => ({ key: 'newKey', name: 'newName' }))).to.equal(
        'test {{[newName].newKey}} thing'
      );
    });
  });
});
