import { JSZipObject } from 'jszip';
import { TextDecoder, TextEncoder } from 'util';

export class ZipEntry {
  public readonly name: string;

  public readonly content: Uint8Array;

  public constructor(name: string, content: string);

  public constructor(name: string, content: Uint8Array);

  public constructor(name: string, content: string | Uint8Array) {
    this.name = name;

    if (typeof content === 'string') {
      const encoder = new TextEncoder();
      this.content = encoder.encode(content);
    } else {
      this.content = content;
    }
  }

  public get size() {
    return this.content.byteLength;
  }

  public static async from(entry: JSZipObject): Promise<ZipEntry> {
    const content = await entry.async('uint8array');
    return new ZipEntry(entry.name, content);
  }

  public toString(encoding?: string): string {
    const decoder = new TextDecoder(encoding);
    return decoder.decode(this.content);
  }
}
