import type { PutPostType, SchemeType } from '@api-sdk/types';
import type { AnyRecord } from '@voiceflow/common';

import type { BaseResourceOptions, Fields } from './base';
import BaseResource from './base';

type NestedCrudResourceOptions<
  Client extends AnyRecord,
  Options extends { parentEndpoint: string },
> = BaseResourceOptions<Client, Options>;

class NestedCrudResource<
  ParentID,
  Scheme extends AnyRecord,
  ModelKey extends keyof SchemeType<Scheme>,
  Client extends Record<string, any>,
  Exclude extends keyof SchemeType<Scheme> = never,
  Options extends { parentEndpoint: string } = { parentEndpoint: string },
> extends BaseResource<Client, Options> {
  private parentEndpoint: string;

  constructor(options: NestedCrudResourceOptions<Client, Options>) {
    super(options);

    this.parentEndpoint = options.clazzOptions.parentEndpoint;
  }

  protected _getCRUDEndpoint(parentID: ParentID, id?: SchemeType<Scheme>[ModelKey]): string {
    // eslint-disable-next-line sonarjs/no-nested-template-literals
    return `${this.parentEndpoint}/${parentID}/${this.endpoint}${id ? `/${id}` : ''}`;
  }

  protected async _get<T extends Partial<SchemeType<Scheme>>>(parentID: ParentID, fields: Fields): Promise<T[]>;

  protected async _get<T extends SchemeType<Scheme>>(parentID: ParentID): Promise<T[]>;

  protected async _get<T extends SchemeType<Scheme>>(parentID: ParentID, fields?: Fields) {
    const { data } = await this.fetch.get<T[]>(`${this._getCRUDEndpoint(parentID)}${this._getFieldsQuery(fields)}`);

    return data;
  }

  protected async _getByID<T extends Partial<SchemeType<Scheme>>>(
    parentID: ParentID,
    id: SchemeType<Scheme>[ModelKey],
    fields: Fields
  ): Promise<T>;

  protected async _getByID<T extends SchemeType<Scheme>>(
    parentID: ParentID,
    id: SchemeType<Scheme>[ModelKey]
  ): Promise<T>;

  protected async _getByID(parentID: ParentID, id: SchemeType<Scheme>[ModelKey], fields?: Fields) {
    const { data } = await this.fetch.get(`${this._getCRUDEndpoint(parentID, id)}${this._getFieldsQuery(fields)}`);

    return data;
  }

  protected async _post<T extends SchemeType<Scheme>>(
    parentID: ParentID,
    body: PutPostType<T, ModelKey, Exclude>
  ): Promise<T> {
    const { data } = await this.fetch.post<T>(this._getCRUDEndpoint(parentID), body);

    return data;
  }

  protected async _put<T extends SchemeType<Scheme>>(
    parentID: ParentID,
    id: SchemeType<Scheme>[ModelKey],
    body: PutPostType<T, ModelKey, Exclude>
  ): Promise<T> {
    const { data } = await this.fetch.put<T>(this._getCRUDEndpoint(parentID, id), body);

    return data;
  }

  protected async _patch<T extends Partial<SchemeType<Scheme>>>(
    parentID: ParentID,
    id: SchemeType<Scheme>[ModelKey],
    body: T
  ): Promise<T> {
    const { data } = await this.fetch.patch<T>(this._getCRUDEndpoint(parentID, id), body);

    return data;
  }

  protected async _delete(parentID: ParentID, id: SchemeType<Scheme>[ModelKey]): Promise<SchemeType<Scheme>[ModelKey]> {
    await this.fetch.delete(this._getCRUDEndpoint(parentID, id));

    return id;
  }
}

export default NestedCrudResource;
