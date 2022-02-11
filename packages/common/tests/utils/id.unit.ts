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

    it('converts very nested', () => {
      const object = {
        a: { b: { c: { d: { e: 'id1' } } } },
        id1: {
          id2: {
            id3: {
              id4: ['id5'],
            },
          },
          b: 'id2',
        },
      };

      const map = {
        id1: 'new1',
        id2: 'new2',
        id3: 'new3',
        id4: 'new4',
        id5: 'new5',
      };

      expect(remapObjectIDs(object, map)).to.eql({
        a: { b: { c: { d: { e: 'new1' } } } },
        new1: {
          new2: {
            new3: {
              new4: ['new5'],
            },
          },
          b: 'new2',
        },
      });
    });
  });
});
