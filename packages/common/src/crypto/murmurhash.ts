import { MurmurHash3 } from 'murmurhash-wasm';

import { hex2abc } from './hex2abc';

export class MurmurHash {
  public static hash(key: string, seed = 0): string {
    const hash = MurmurHash3.hash32(key, seed);
    const value = hash.readUInt32BE(0);
    const hex = value.toString(16);

    return hex2abc(hex);
  }
}

export default MurmurHash;
