import { MurmurHash3 } from 'murmurhash-wasm';

export class MurmurHash {
  public static hash(key: string, seed: number): string {
    const hash = MurmurHash3.hash32(key, seed);
    const value = hash.readUInt32BE();
    return value.toString(16);
  }
}

export default MurmurHash;
