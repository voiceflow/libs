import * as t from 'io-ts';

import BaseResource from './base';

class CrudResource<P extends Record<string, t.Mixed>, K extends keyof P> extends BaseResource<P, K> {
  private getRUDEndpoint(id: t.TypeOf<P[K]>) {
    return `${this.getEndpoint()}/${id}`;
  }

  public async get(id: t.TypeOf<P[K]>): Promise<t.TypeOfProps<P>> {
    this.validateID(id);

    const { data } = await this.fetch.get<t.TypeOfProps<P>>(this.getRUDEndpoint(id));

    return data;
  }

  public async list(): Promise<t.TypeOfProps<P>[]> {
    const { data } = await this.fetch.get<t.TypeOfProps<P>[]>(this.getEndpoint());

    return data;
  }

  public async create(body: Omit<t.TypeOfProps<P>, K | 'created'>): Promise<t.TypeOfProps<P>> {
    this.validateCreatBody(body);

    const { data } = await this.fetch.post<t.TypeOfProps<P>>(this.getEndpoint(), body);

    return data;
  }

  public async update(id: t.TypeOf<P[K]>, body: Partial<t.TypeOfProps<P>>): Promise<Partial<t.TypeOfProps<P>>> {
    this.validateID(id);
    this.validateUpdateBody(body);

    const { data } = await this.fetch.patch<Partial<t.TypeOfProps<P>>>(this.getRUDEndpoint(id), body);

    return data;
  }

  public async delete(id: t.TypeOf<P[K]>): Promise<t.TypeOfProps<P>> {
    this.validateID(id);

    const { data } = await this.fetch.delete<t.TypeOfProps<P>>(this.getRUDEndpoint(id));

    return data;
  }
}

export default CrudResource;
