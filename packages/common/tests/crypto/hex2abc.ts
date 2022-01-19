import { expect } from 'chai';

import { hex2abc } from '@/crypto/hex2abc';

describe('hex2abc()', () => {
  it('works', () => {
    expect(hex2abc('abcdef')).to.eql('abcdef');

    expect(hex2abc('0123456789')).to.eql('ghijklmnop');
  });
  it('works with 0x prefixes', () => {
    expect(hex2abc('0xabc123')).to.eql('gxabchij');
  });
});
