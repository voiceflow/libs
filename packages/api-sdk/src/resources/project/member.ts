import * as s from 'superstruct';

import Fetch, { PathVariables } from '@/fetch';
import { BasePlatformData, CreatorID, Member, ProjectID, SMember, SProjectID } from '@/models';

import BaseResource, { Fields } from '../base';
import { ENDPOINT } from './constants';

export const modelIDKey = 'creatorID';
export type ModelIDKey = typeof modelIDKey;

class MemberResource extends BaseResource<typeof SMember['schema'], ModelIDKey, MemberResource> {
  constructor(fetch: Fetch) {
    super({
      fetch,
      clazz: MemberResource,
      schema: SMember.schema,
      modelIDKey,
      resourceEndpoint: ENDPOINT,
    });
  }

  protected _getCRUDEndpoint(id: ProjectID): string {
    return `${this._getEndpoint()}/${id}/members`;
  }

  public async list<P extends Partial<Member<BasePlatformData>>>(projectID: ProjectID, fields: Fields): Promise<P[]>;

  public async list<P extends Member<any> = Member<BasePlatformData>>(projectID: ProjectID): Promise<P[]>;

  public async list<P extends BasePlatformData>(projectID: ProjectID): Promise<Member<P>[]>;

  public async list(projectID: ProjectID, fields?: Fields): Promise<Member<any>[] | Partial<Member<any>>[]> {
    s.assert(projectID, SProjectID);

    const { data } = await this.fetch.get<Member<any>[] | Partial<Member<any>>[]>(
      `${this._getCRUDEndpoint(projectID)}${this._getFieldsQuery(fields)}`
    );

    return data;
  }

  public async get<P extends Partial<Member<BasePlatformData>>>(projectID: ProjectID, fields: Fields): Promise<P>;

  public async get<P extends Member<any> = Member<BasePlatformData>>(projectID: ProjectID, fields: Fields): Promise<P>;

  public async get<P extends BasePlatformData>(projectID: ProjectID): Promise<Member<P>>;

  public async get(projectID: ProjectID, fields?: Fields): Promise<Member<any> | Partial<Member<any>>> {
    s.assert(projectID, SProjectID);

    const { data } = await this.fetch.get<Member<any> | Partial<Member<any>>>(
      `${this._getEndpoint()}/${projectID}/member${this._getFieldsQuery(fields)}`
    );

    return data;
  }

  public async create<P extends BasePlatformData>(projectID: ProjectID, body: Omit<Member<P>, ModelIDKey>): Promise<Member<P>>;

  public async create<P extends Omit<Member<any>, ModelIDKey>>(projectID: ProjectID, body: P): Promise<P & Pick<Member<any>, ModelIDKey>>;

  public async create(projectID: ProjectID, body: Omit<Member<any>, ModelIDKey>): Promise<Member<any>> {
    s.assert(projectID, SProjectID);
    this._assertPutAndPostBody(body);

    const { data } = await this.fetch.post<Member<any>>(this._getCRUDEndpoint(projectID), body);

    return data;
  }

  public async update<P extends BasePlatformData>(projectID: ProjectID, body: Omit<Member<P>, ModelIDKey>): Promise<Member<P>>;

  public async update<P extends Omit<Member<any>, ModelIDKey>>(projectID: ProjectID, body: P): Promise<P & Pick<Member<any>, ModelIDKey>>;

  public async update(projectID: ProjectID, body: Omit<Member<any>, ModelIDKey>): Promise<Member<any>> {
    s.assert(projectID, SProjectID);
    this._assertPutAndPostBody(body);

    const { data } = await this.fetch.put<Member<any>>(this._getCRUDEndpoint(projectID), body);

    return data;
  }

  public async delete(projectID: ProjectID): Promise<CreatorID> {
    s.assert(projectID, SProjectID);

    const { data } = await this.fetch.delete<CreatorID>(this._getCRUDEndpoint(projectID));

    return data;
  }

  public async platformDataAdd<P>(projectID: ProjectID, path: string, value: P, pathVariables?: PathVariables): Promise<P> {
    s.assert(projectID, SProjectID);

    const { data } = await this.fetch.granularPatch<P>(`${this._getCRUDEndpoint(projectID)}/platform-data/add`, path, value, pathVariables);

    return data;
  }

  public async platformDataUpdate<P>(projectID: ProjectID, path: string, value: P, pathVariables?: PathVariables): Promise<P> {
    s.assert(projectID, SProjectID);

    const { data } = await this.fetch.granularPatch<P>(`${this._getCRUDEndpoint(projectID)}/platform-data/update`, path, value, pathVariables);

    return data;
  }

  public async platformDataRemove<P>(projectID: ProjectID, path: string, pathVariables?: PathVariables): Promise<P> {
    s.assert(projectID, SProjectID);

    const { data } = await this.fetch.granularPatch<P>(`${this._getCRUDEndpoint(projectID)}/platform-data/remove`, path, undefined, pathVariables);

    return data;
  }
}

export default MemberResource;
