import * as s from 'superstruct';

import type Fetch from '@/fetch';
import type { BaseSchema, SchemeType } from '@/types';
import { CreatePutAndPostStruct, createPutAndPostStruct } from '@/utils';

class BaseResource<S extends BaseSchema, K extends keyof SchemeType<S>> {
  protected readonly fetch: Fetch;

  private readonly modelIDKey: K;

  private readonly struct: s.Struct<SchemeType<S>, S>;

  private readonly patchStruct: s.Struct<S>;

  private readonly putAndPostStruct: CreatePutAndPostStruct<S, K>;

  private readonly resourceEndpoint: string;

  constructor({ fetch, schema, modelIDKey, resourceEndpoint }: { fetch: Fetch; schema: S; modelIDKey: K; resourceEndpoint: string }) {
    this.fetch = fetch;
    this.modelIDKey = modelIDKey;
    this.resourceEndpoint = resourceEndpoint;

    this.struct = s.object(schema);
    this.patchStruct = s.partial(schema);
    this.putAndPostStruct = createPutAndPostStruct(schema, modelIDKey);
  }

  protected _getEndpoint(): string {
    return this.resourceEndpoint;
  }

  protected _getFieldsQuery(fields?: string[]): string {
    return fields ? `?fields=${fields.join(',')}` : '';
  }

  protected _assertModelID(id: string | number | SchemeType<S>[K]): void {
    s.assert(id, this.struct.schema[this.modelIDKey as string]);
  }

  protected _assertPatchBody(body: Partial<SchemeType<S>>): void {
    s.assert(body, this.patchStruct);
  }

  protected _assertPutAndPostBody(body: Omit<SchemeType<S>, K | 'created'>): void {
    s.assert(body, this.putAndPostStruct);
  }
}

export default BaseResource;
