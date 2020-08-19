import * as s from 'superstruct';

import type Fetch from '@/fetch';
import type { BaseSchema, PutPostSchemeType, PutPostStruct, SchemeType } from '@/types';
import { createPutAndPostStruct } from '@/utils';

class BaseResource<S extends BaseSchema, K extends keyof SchemeType<S>, E extends keyof SchemeType<S> = never> {
  protected readonly fetch: Fetch;

  private readonly modelIDKey: K;

  private readonly struct: s.Struct<SchemeType<S>, S>;

  private readonly patchStruct: s.Struct<S>;

  private readonly putAndPostStruct: PutPostStruct<S, K, E>;

  private readonly resourceEndpoint: string;

  constructor({
    fetch,
    schema,
    modelIDKey,
    resourceEndpoint,
    postPutExcludedFields = [],
  }: {
    fetch: Fetch;
    schema: S;
    modelIDKey: K;
    resourceEndpoint: string;
    postPutExcludedFields?: E[];
  }) {
    this.fetch = fetch;
    this.modelIDKey = modelIDKey;
    this.resourceEndpoint = resourceEndpoint;

    this.struct = s.object(schema);
    this.patchStruct = s.partial(schema);
    this.putAndPostStruct = createPutAndPostStruct(schema, modelIDKey, postPutExcludedFields);
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

  protected _assertPutAndPostBody(body: PutPostSchemeType<S, K, E>): void {
    s.assert(body, this.putAndPostStruct);
  }
}

export default BaseResource;
