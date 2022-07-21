import type CipherHelper from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';

interface SynchronousOptions {
  alg: typeof CipherHelper;
  key: string;
}

class Synchronous {
  #alg: typeof CipherHelper;

  #key: string;

  constructor({ alg, key }: SynchronousOptions) {
    this.#alg = alg;
    this.#key = key;
  }

  protected getKey(): string {
    return this.#key;
  }

  public encrypt(data: string, key: string = this.#key): string {
    return this.#alg.encrypt(data, key).toString();
  }

  public encryptJSON(data: unknown): string {
    return this.encrypt(JSON.stringify(data));
  }

  public decrypt(data: string, key = this.#key): string {
    return this.#alg.decrypt(data, key).toString(Utf8);
  }

  public decryptJSON<T>(data: string): T {
    return JSON.parse(this.decrypt(data));
  }
}

export default Synchronous;
