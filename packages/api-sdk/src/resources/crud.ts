import type { PutPostType, SchemeType } from '@api-sdk/types';
import type { AnyRecord } from '@voiceflow/common';

import BaseResource, { Fields } from './base';

class CrudResource<
  S extends AnyRecord,
  K extends keyof SchemeType<S>,
  C extends Record<string, any>,
  E extends keyof SchemeType<S> = never
> extends BaseResource<C> {
  protected _getCRUDEndpoint(id?: SchemeType<S>[K]): string {
    return id ? `${this._getEndpoint()}/${id}` : this._getEndpoint();
  }

  protected async _get<T extends Partial<SchemeType<S>>>(fields: Fields): Promise<T[]>;

  protected async _get<T extends SchemeType<S>>(): Promise<T[]>;

  protected async _get<T extends SchemeType<S>>(fields?: Fields) {
    const { data } = await this.fetch.get<T[]>(`${this._getCRUDEndpoint()}${this._getFieldsQuery(fields)}`);

    return data;
  }

  protected async _getByID<T extends Partial<SchemeType<S>>>(id: SchemeType<S>[K], fields: Fields): Promise<T>;

  protected async _getByID<T extends SchemeType<S>>(id: SchemeType<S>[K]): Promise<T>;

  protected async _getByID(id: SchemeType<S>[K], fields?: Fields) {
    const { data } = await this.fetch.get(`${this._getCRUDEndpoint(id)}${this._getFieldsQuery(fields)}`);

    return data;
  }

  protected async _post<T extends SchemeType<S>>(body: PutPostType<T, K, E>): Promise<T> {
    const { data } = await this.fetch.post<T>(this._getCRUDEndpoint(), body);

    return data;
  }

  protected async _put<T extends SchemeType<S>>(id: SchemeType<S>[K], body: PutPostType<T, K, E>): Promise<T> {
    const { data } = await this.fetch.put<T>(this._getCRUDEndpoint(id), body);

    return data;
  }

  protected async _patch<T extends SchemeType<S>>(id: SchemeType<S>[K], body: Partial<T>): Promise<Partial<T>> {
    const { data } = await this.fetch.patch<Partial<T>>(this._getCRUDEndpoint(id), body);

    return data;
  }

  protected async _delete(id: SchemeType<S>[K]): Promise<SchemeType<S>[K]> {
    await this.fetch.delete(this._getCRUDEndpoint(id));

    return id;
  }
}

export default CrudResource;
