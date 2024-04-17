import type { PutPostType, SchemeType } from '@api-sdk/types';
import type { AnyRecord } from '@voiceflow/common';

import type { Fields } from './base';
import BaseResource from './base';

class CrudResource<
  Scheme extends AnyRecord,
  ID extends keyof SchemeType<Scheme>,
  Client extends Record<string, any>,
  Exclude extends keyof SchemeType<Scheme> = never,
> extends BaseResource<Client> {
  protected _getCRUDEndpoint(id?: SchemeType<Scheme>[ID]): string {
    return id ? `${this.endpoint}/${id}` : this.endpoint;
  }

  protected async _get<T extends Partial<SchemeType<Scheme>>>(fields: Fields): Promise<T[]>;

  protected async _get<T extends SchemeType<Scheme>>(): Promise<T[]>;

  protected async _get<T extends SchemeType<Scheme>>(fields?: Fields) {
    const { data } = await this.fetch.get<T[]>(`${this._getCRUDEndpoint()}${this._getFieldsQuery(fields)}`);

    return data;
  }

  protected async _getByID<T extends Partial<SchemeType<Scheme>>>(
    id: SchemeType<Scheme>[ID],
    fields: Fields
  ): Promise<T>;

  protected async _getByID<T extends SchemeType<Scheme>>(id: SchemeType<Scheme>[ID]): Promise<T>;

  protected async _getByID(id: SchemeType<Scheme>[ID], fields?: Fields) {
    const { data } = await this.fetch.get(`${this._getCRUDEndpoint(id)}${this._getFieldsQuery(fields)}`);

    return data;
  }

  protected async _post<T extends SchemeType<Scheme>>(body: PutPostType<T, ID, Exclude>): Promise<T> {
    const { data } = await this.fetch.post<T>(this._getCRUDEndpoint(), body);

    return data;
  }

  protected async _put<T extends SchemeType<Scheme>>(
    id: SchemeType<Scheme>[ID],
    body: PutPostType<T, ID, Exclude>
  ): Promise<T> {
    const { data } = await this.fetch.put<T>(this._getCRUDEndpoint(id), body);

    return data;
  }

  protected async _patch<T extends SchemeType<Scheme>>(
    id: SchemeType<Scheme>[ID],
    body: Partial<T>
  ): Promise<Partial<T>> {
    const { data } = await this.fetch.patch<Partial<T>>(this._getCRUDEndpoint(id), body);

    return data;
  }

  protected async _delete(id: SchemeType<Scheme>[ID]): Promise<SchemeType<Scheme>[ID]> {
    await this.fetch.delete(this._getCRUDEndpoint(id));

    return id;
  }
}

export default CrudResource;
