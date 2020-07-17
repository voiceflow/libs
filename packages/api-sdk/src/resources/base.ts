import * as s from 'superstruct';

import type Fetch from '@/fetch';
import type { BaseScheme, SchemeType } from '@/types';
import { createPutAndPostStruct } from '@/utils';

class BaseResource<S extends BaseScheme, K extends keyof SchemeType<S>> {
  protected readonly fetch: Fetch;

  private readonly modelIDKey: K;

  private readonly struct: s.Struct<S>;

  private readonly patchStruct: s.Struct<S>;

  private readonly putAndPostStruct: s.Struct<S>;

  private readonly resourceEndpoint: string;

  constructor({ fetch, schema, modelIDKey, resourceEndpoint }: { fetch: Fetch; schema: S; modelIDKey: K; resourceEndpoint: string }) {
    this.fetch = fetch;
    this.modelIDKey = modelIDKey;
    this.resourceEndpoint = resourceEndpoint;

    this.struct = s.type(schema);
    this.patchStruct = s.partial(schema);

    this.putAndPostStruct = createPutAndPostStruct(schema, modelIDKey);
  }

  protected _getEndpoint(): string {
    return this.resourceEndpoint;
  }

  protected _assertModelID(id: string | number | SchemeType<S>[K]): void {
    s.assert(id, this.struct.schema[this.modelIDKey]);
  }

  protected _assertPatchBody(body: Partial<SchemeType<S>>): void {
    s.assert(body, this.patchStruct);
  }

  protected _assertPutAndPostBody(body: Omit<SchemeType<S>, K | 'created'>): void {
    s.assert(body, this.putAndPostStruct);
  }
}

export default BaseResource;
