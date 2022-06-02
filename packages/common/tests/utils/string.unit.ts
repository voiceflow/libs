import { recursiveReplace } from '@common/utils/string';
import { expect } from 'chai';

describe('Utils | string', () => {
  describe('recursiveReplace', () => {
    it('replaces until it cannot replace any more', () => {
      // act
      const result = recursiveReplace('heeeeeeello', 'ee', () => 'e');

      // assert
      expect(result).to.equal('hello');
    });
  });
});
