import { Models } from '@voiceflow/base-types';

import Fetch, { PathVariables } from '@/fetch';

import BaseResource, { Fields } from '../base';
import { ENDPOINT } from './constants';

export const modelIDKey = 'creatorID';
export type ModelIDKey = typeof modelIDKey;

type BasePlatformData = Models.BasePlatformData;
type ProjectID = Models.ProjectID;
type CreatorID = Models.CreatorID;

class MemberResource extends BaseResource<MemberResource> {
  constructor(fetch: Fetch) {
    super({
      fetch,
      clazz: MemberResource,
      endpoint: ENDPOINT,
    });
  }

  protected _getCRUDEndpoint(id: ProjectID): string {
    return `${this._getEndpoint()}/${id}/members`;
  }

  public async list<P extends Partial<Models.Member<BasePlatformData>>>(projectID: ProjectID, fields: Fields): Promise<P[]>;

  public async list<P extends Models.Member<any> = Models.Member<BasePlatformData>>(projectID: ProjectID): Promise<P[]>;

  public async list<P extends BasePlatformData>(projectID: ProjectID): Promise<Models.Member<P>[]>;

  public async list(projectID: ProjectID, fields?: Fields): Promise<Models.Member<any>[] | Partial<Models.Member<any>>[]> {
    const { data } = await this.fetch.get<Models.Member<any>[] | Partial<Models.Member<any>>[]>(
      `${this._getCRUDEndpoint(projectID)}${this._getFieldsQuery(fields)}`
    );

    return data;
  }

  public async get<P extends Partial<Models.Member<BasePlatformData>>>(projectID: ProjectID, fields: Fields): Promise<P>;

  public async get<P extends Models.Member<any> = Models.Member<BasePlatformData>>(projectID: ProjectID, fields: Fields): Promise<P>;

  public async get<P extends BasePlatformData>(projectID: ProjectID): Promise<Models.Member<P>>;

  public async get(projectID: ProjectID, fields?: Fields): Promise<Models.Member<any> | Partial<Models.Member<any>>> {
    const { data } = await this.fetch.get<Models.Member<any> | Partial<Models.Member<any>>>(
      `${this._getEndpoint()}/${projectID}/member${this._getFieldsQuery(fields)}`
    );

    return data;
  }

  public async create<P extends BasePlatformData>(projectID: ProjectID, body: Omit<Models.Member<P>, ModelIDKey>): Promise<Models.Member<P>>;

  public async create<P extends Omit<Models.Member<any>, ModelIDKey>>(
    projectID: ProjectID,
    body: P
  ): Promise<P & Pick<Models.Member<any>, ModelIDKey>>;

  public async create(projectID: ProjectID, body: Omit<Models.Member<any>, ModelIDKey>): Promise<Models.Member<any>> {
    const { data } = await this.fetch.post<Models.Member<any>>(this._getCRUDEndpoint(projectID), body);

    return data;
  }

  public async update<P extends BasePlatformData>(projectID: ProjectID, body: Omit<Models.Member<P>, ModelIDKey>): Promise<Models.Member<P>>;

  public async update<P extends Omit<Models.Member<any>, ModelIDKey>>(
    projectID: ProjectID,
    body: P
  ): Promise<P & Pick<Models.Member<any>, ModelIDKey>>;

  public async update(projectID: ProjectID, body: Omit<Models.Member<any>, ModelIDKey>): Promise<Models.Member<any>> {
    const { data } = await this.fetch.put<Models.Member<any>>(this._getCRUDEndpoint(projectID), body);

    return data;
  }

  public async delete(projectID: ProjectID): Promise<CreatorID> {
    const { data } = await this.fetch.delete<CreatorID>(this._getCRUDEndpoint(projectID));

    return data;
  }

  public async platformDataAdd<P>(projectID: ProjectID, path: string, value: P, pathVariables?: PathVariables): Promise<P> {
    const { data } = await this.fetch.granularPatch<P>(`${this._getCRUDEndpoint(projectID)}/platform-data/add`, path, value, pathVariables);

    return data;
  }

  public async platformDataUpdate<P>(projectID: ProjectID, path: string, value: P, pathVariables?: PathVariables): Promise<P> {
    const { data } = await this.fetch.granularPatch<P>(`${this._getCRUDEndpoint(projectID)}/platform-data/update`, path, value, pathVariables);

    return data;
  }

  public async platformDataRemove<P>(projectID: ProjectID, path: string, pathVariables?: PathVariables): Promise<P> {
    const { data } = await this.fetch.granularPatch<P>(`${this._getCRUDEndpoint(projectID)}/platform-data/remove`, path, undefined, pathVariables);

    return data;
  }
}

export default MemberResource;
