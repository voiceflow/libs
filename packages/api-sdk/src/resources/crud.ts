import type { BaseScheme, SchemeType } from '@/types';

import BaseResource from './base';

class CrudResource<S extends BaseScheme, K extends keyof SchemeType<S>> extends BaseResource<S, K> {
  protected _getCRUDEndpoint(id?: SchemeType<S>[K]): string {
    return id ? `${this._getEndpoint()}/${id}` : this._getEndpoint();
  }

  protected async _get<T extends SchemeType<S>>(): Promise<T[]> {
    const { data } = await this.fetch.get<T[]>(this._getCRUDEndpoint());

    return data;
  }

  protected async _getByID<T extends SchemeType<S>>(id: SchemeType<S>[K]): Promise<T> {
    this._assertModelID(id);

    const { data } = await this.fetch.get<T>(this._getCRUDEndpoint(id));

    return data;
  }

  protected async _post<T extends SchemeType<S>>(body: Omit<T, K | 'created'>): Promise<T> {
    this._assertPutAndPostBody(body);

    const { data } = await this.fetch.post<T>(this._getCRUDEndpoint(), body);

    return data;
  }

  protected async _put<T extends SchemeType<S>>(id: SchemeType<S>[K], body: Omit<T, K | 'created'>): Promise<T> {
    this._assertModelID(id);
    this._assertPutAndPostBody(body);

    const { data } = await this.fetch.put<T>(this._getCRUDEndpoint(id), body);

    return data;
  }

  protected async _patch<T extends SchemeType<S>>(id: SchemeType<S>[K], body: Partial<T>): Promise<Partial<T>> {
    this._assertModelID(id);
    this._assertPatchBody(body);

    const { data } = await this.fetch.patch<Partial<T>>(this._getCRUDEndpoint(id), body);

    return data;
  }

  protected async _delete(id: SchemeType<S>[K]): Promise<SchemeType<S>[K]> {
    this._assertModelID(id);

    await this.fetch.delete(this._getCRUDEndpoint(id));

    return id;
  }
}

export default CrudResource;
