import { MurmurHash3 } from 'murmurhash-wasm';

export class MurmurHash {
  public static hash(key: string, seed: number): string {
    const hash = MurmurHash3.hash32(key, seed);
    const value = hash.readUInt32BE();
    const hex = value.toString(16);

    let ret = ''; // store the return value

    for (let i = 0; i < hex.length; i++) {
      // loop through the hex value and convert numbers to alphabet
      let sub = hex.slice(i, i + 1);
      if (sub.charCodeAt(0) > 47 && sub.charCodeAt(0) < 58) {
        // if the character is a number
        sub = String.fromCharCode(sub.charCodeAt(0) + 17); // add 17 to the character code (convert to alphabet)
      }
      ret += sub; // append the converted character to the return value
    }
    return ret;
  }
}

export default MurmurHash;
