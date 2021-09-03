import * as s from 'superstruct';

import type { BaseSchema, PutPostSchemeType, PutPostStruct, SchemeType } from '@/types';
import { createPutAndPostStruct } from '@/utils';

import Fetcher, { FetcherOptions } from './fetcher';

export type Fields = string[] | ReadonlyArray<string>;

export interface BaseResourceOptions<
  S extends BaseSchema,
  K extends keyof SchemeType<S>,
  C extends Record<string, any>,
  E extends keyof SchemeType<S> = never
> extends FetcherOptions<C> {
  schema: S;
  modelIDKey: K;
  postPutExcludedFields?: E[];
}

class BaseResource<
  S extends BaseSchema,
  K extends keyof SchemeType<S>,
  C extends Record<string, any>,
  E extends keyof SchemeType<S> = never
> extends Fetcher<C> {
  private readonly modelIDKey: K;

  private readonly struct: s.Struct<SchemeType<S>, S>;

  private readonly patchStruct: s.Struct<S>;

  private readonly putAndPostStruct: PutPostStruct<S, K, E>;

  constructor({ schema, modelIDKey, postPutExcludedFields = [], ...options }: BaseResourceOptions<S, K, C, E>) {
    super(options);

    this.modelIDKey = modelIDKey;

    this.struct = s.object(schema);
    this.patchStruct = s.partial(schema);
    this.putAndPostStruct = createPutAndPostStruct(schema, modelIDKey, postPutExcludedFields);
  }

  // eslint-disable-next-line class-methods-use-this
  protected _getFieldsQuery(fields?: Fields): string {
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
