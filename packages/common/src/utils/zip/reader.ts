import JSZip from 'jszip';

import { ZipEntry } from './entry';
import { isZipFile } from './guard';

const DEFAULT_MAX_FILE_COUNT = 10000;
const DEFAULT_MAX_UNZIP_SIZE_BYTES = 1e9; // 1GB
const DEFAULT_MAX_ZIP_RECURSION_DEPTH = Infinity;

/**
 * Provides an interface to safely read all files from a zip.
 *
 * Ensure `jszip` is installed as a dependency to use.
 */
export interface ZipReaderConfig {
  /**
   * Provides protection from zip bombs by only reading up to this many files.
   * Will throw an error if the zip file exceeds this count.
   */
  maxFileCount: number;
  /**
   * Provides protection from zip bombs by only reading up to this many bytes total.
   * Will throw an error if the total bytes exceeds this count.
   */
  maxUnzipSizeBytes: number;
  /**
   * If the zip file contains zip files, they will be extracted up to this many deep.
   * If the depth exceeds this number, then these deeper zip files will be returned instead of extracted.
   */
  maxZipRecursionDepth: number;
}

export class ZipReader {
  private readonly config: ZipReaderConfig;

  public constructor(private readonly zip: JSZip, config: Partial<ZipReaderConfig> = {}) {
    this.config = {
      maxFileCount: DEFAULT_MAX_FILE_COUNT,
      maxUnzipSizeBytes: DEFAULT_MAX_UNZIP_SIZE_BYTES,
      maxZipRecursionDepth: DEFAULT_MAX_ZIP_RECURSION_DEPTH,
      ...config,
    };
  }

  public async *getFiles(): AsyncGenerator<ZipEntry> {
    yield* this.getFilesRecursively(this.zip, this.config.maxZipRecursionDepth);
  }

  private async *getFilesRecursively(zip: JSZip, maxDepth: number, currentDepth = 0): AsyncGenerator<ZipEntry> {
    const objects = zip.filter(() => true);

    let fileCount = 0;
    let totalSize = 0;

    // eslint-disable-next-line no-restricted-syntax
    for (const obj of objects) {
      if (obj.dir) continue;

      fileCount += 1;
      if (fileCount > this.config.maxFileCount) {
        throw new Error(`File count exceeded maximum (${this.config.maxFileCount})`);
      }

      // eslint-disable-next-line no-await-in-loop
      const entry = await ZipEntry.from(obj);

      totalSize += entry.size;
      if (totalSize > this.config.maxUnzipSizeBytes) {
        throw new Error(`Total file size exceeded maximum (${this.config.maxUnzipSizeBytes} bytes)`);
      }

      if (currentDepth < maxDepth && isZipFile(entry.content)) {
        // eslint-disable-next-line no-await-in-loop
        const zip = await JSZip.loadAsync(entry.content);
        yield* this.getFilesRecursively(zip, maxDepth, currentDepth + 1);
      } else {
        yield entry;
      }
    }
  }
}
