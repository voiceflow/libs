import Fetch, { PathVariables } from '@api-sdk/fetch';
import { AnyRecord, BaseModels } from '@voiceflow/base-types';

import BaseResource, { Fields } from '../base';
import { ENDPOINT } from './constants';

export const modelIDKey = 'creatorID';
export type ModelIDKey = typeof modelIDKey;

class MemberResource extends BaseResource<MemberResource> {
  constructor(fetch: Fetch) {
    super({
      fetch,
      clazz: MemberResource,
      endpoint: ENDPOINT,
    });
  }

  protected _getCRUDEndpoint(id: string): string {
    return `${this._getEndpoint()}/${id}/members`;
  }

  public async list<P extends Partial<BaseModels.Project.Member>>(projectID: string, fields: Fields): Promise<P[]>;

  public async list<P extends BaseModels.Project.Member<any> = BaseModels.Project.Member>(projectID: string): Promise<P[]>;

  public async list<P extends AnyRecord>(projectID: string): Promise<BaseModels.Project.Member<P>[]>;

  public async list(projectID: string, fields?: Fields): Promise<BaseModels.Project.Member<any>[] | Partial<BaseModels.Project.Member<any>>[]> {
    const { data } = await this.fetch.get<BaseModels.Project.Member<any>[] | Partial<BaseModels.Project.Member<any>>[]>(
      `${this._getCRUDEndpoint(projectID)}${this._getFieldsQuery(fields)}`
    );

    return data;
  }

  public async get<P extends Partial<BaseModels.Project.Member>>(projectID: string, fields: Fields): Promise<P>;

  public async get<P extends BaseModels.Project.Member<any> = BaseModels.Project.Member>(projectID: string, fields: Fields): Promise<P>;

  public async get<P extends AnyRecord>(projectID: string): Promise<BaseModels.Project.Member<P>>;

  public async get(projectID: string, fields?: Fields): Promise<BaseModels.Project.Member<any> | Partial<BaseModels.Project.Member<any>>> {
    const { data } = await this.fetch.get<BaseModels.Project.Member<any> | Partial<BaseModels.Project.Member<any>>>(
      `${this._getEndpoint()}/${projectID}/member${this._getFieldsQuery(fields)}`
    );

    return data;
  }

  public async create<P extends AnyRecord>(
    projectID: string,
    body: Omit<BaseModels.Project.Member<P>, ModelIDKey>
  ): Promise<BaseModels.Project.Member<P>>;

  public async create<P extends Omit<BaseModels.Project.Member<any>, ModelIDKey>>(
    projectID: string,
    body: P
  ): Promise<P & Pick<BaseModels.Project.Member<any>, ModelIDKey>>;

  public async create(projectID: string, body: Omit<BaseModels.Project.Member<any>, ModelIDKey>): Promise<BaseModels.Project.Member<any>> {
    const { data } = await this.fetch.post<BaseModels.Project.Member<any>>(this._getCRUDEndpoint(projectID), body);

    return data;
  }

  public async update<P extends AnyRecord>(
    projectID: string,
    body: Omit<BaseModels.Project.Member<P>, ModelIDKey>
  ): Promise<BaseModels.Project.Member<P>>;

  public async update<P extends Omit<BaseModels.Project.Member<any>, ModelIDKey>>(
    projectID: string,
    body: P
  ): Promise<P & Pick<BaseModels.Project.Member<any>, ModelIDKey>>;

  public async update(projectID: string, body: Omit<BaseModels.Project.Member<any>, ModelIDKey>): Promise<BaseModels.Project.Member<any>> {
    const { data } = await this.fetch.put<BaseModels.Project.Member<any>>(this._getCRUDEndpoint(projectID), body);

    return data;
  }

  public async delete(projectID: string): Promise<number> {
    const { data } = await this.fetch.delete<number>(this._getCRUDEndpoint(projectID));

    return data;
  }

  public async platformDataAdd<P>(projectID: string, path: string, value: P, pathVariables?: PathVariables): Promise<P> {
    const { data } = await this.fetch.granularPatch<P>(`${this._getCRUDEndpoint(projectID)}/platform-data/add`, path, value, pathVariables);

    return data;
  }

  public async platformDataUpdate<P>(projectID: string, path: string, value: P, pathVariables?: PathVariables): Promise<P> {
    const { data } = await this.fetch.granularPatch<P>(`${this._getCRUDEndpoint(projectID)}/platform-data/update`, path, value, pathVariables);

    return data;
  }

  public async platformDataRemove<P>(projectID: string, path: string, pathVariables?: PathVariables): Promise<P> {
    const { data } = await this.fetch.granularPatch<P>(`${this._getCRUDEndpoint(projectID)}/platform-data/remove`, path, undefined, pathVariables);

    return data;
  }
}

export default MemberResource;
