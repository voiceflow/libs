import { remapObjectIDs } from '@common/utils/id';
import { expect } from 'chai';

// sample ObjectIds
const Sample = {
  A: 'aaaaaaaaaaaaaaaaaaaaaaaa',
  B: 'bbbbbbbbbbbbbbbbbbbbbbbb',
  C: 'cccccccccccccccccccccccc',
  REAL: '61dcebb839fc80002d048dbd',
};

describe('Utils | id', () => {
  describe('remapObjectIDs()', () => {
    it('shallow nested', () => {
      const map = { [Sample.A]: Sample.B };
      expect(remapObjectIDs({ cool: Sample.A }, map)).to.eql({ cool: Sample.B });
    });

    it('converts string', () => {
      const map = { [Sample.A]: Sample.B };
      expect(remapObjectIDs(Sample.A, map)).to.eql(Sample.B);
    });

    it('converts multiple', () => {
      const map = { [Sample.A]: Sample.B, [Sample.REAL]: Sample.C };
      expect(remapObjectIDs({ 1: Sample.A, 2: Sample.REAL }, map)).to.eql({ 1: Sample.B, 2: Sample.C });

      expect(remapObjectIDs({ 1: { 2: { 3: Sample.A, 4: [Sample.REAL] } } }, map)).to.eql({ 1: { 2: { 3: Sample.B, 4: [Sample.C] } } });
    });
  });
});
