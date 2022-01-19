import { MurmurHash3 } from 'murmurhash-wasm';

import { hex2abc } from '@/crypto/hex2abc';

export class MurmurHash {
  public static hash(key: string, seed: number): string {
    const hash = MurmurHash3.hash32(key, seed);
    const value = hash.readUInt32BE();
    const hex = value.toString(16);

    return hex2abc(hex);
  }
}

export default MurmurHash;
