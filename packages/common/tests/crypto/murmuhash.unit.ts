import { expect } from 'chai';

import { MurmurHash } from '@/crypto/murmurhash';

// for second test check (4 byte chunk)
// const buf_left = Buffer.of(0xff, 0xff, 0xff, 0xff);
// const buf_right = Buffer.of(0x76, 0x29, 0x3b, 0x50);

// for third test check (correct endian order)
// const buf_left_two = Buffer.of(0x21, 0x43, 0x65, 0x87);
// const buf_right_two = Buffer.of(0xf5, 0x5b, 0x51, 0x6b);

describe('hash()', () => {
  it('return a 32-bit hash resulting from the murmurhash3 algorithm', () => {
    //   expect(MurmurHash.hash('hello', 0)).to.eql('5844da46');
    expect(MurmurHash.hash('hello world', 0)).to.eql('44e14905');
    expect(MurmurHash.hash('', 0)).to.eql('00000000');
    expect(MurmurHash.hash('abc', 0)).to.eql('b3dd93fa');

    // from https://github.com/jonahsnider/murmurhash-wasm/blob/main/test/murmur-hash3/hash-32.test.ts
    // expect(MurmurHash.hash(buf_left.toString('hex'), 0)).to.eql(buf_right.toString('hex'));
    // expect(MurmurHash.hash(buf_left_two.toString('hex'), 0)).to.eql(buf_right_two.toString('hex'));
  });
});
