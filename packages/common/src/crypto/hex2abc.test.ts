import { hex2abc } from './hex2abc';

describe('hex2abc()', () => {
  it('works', () => {
    expect(hex2abc('abcdef')).toBe('abcdef');

    expect(hex2abc('0123456789')).toBe('ghijklmnop');
  });
  it('works with 0x prefixes', () => {
    expect(hex2abc('0xabc123')).toBe('gxabchij');
  });
});
