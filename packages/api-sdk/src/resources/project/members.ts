import * as s from 'superstruct';

import type Fetch from '@/fetch';
import { BasePlatformData, CreatorID, Member, ProjectID, SMember, SProjectID } from '@/models';

import BaseResource from '../base';

export const modelIDKey = 'creatorID';
export type ModelIDKey = typeof modelIDKey;

class MembersResource extends BaseResource<typeof SMember['schema'], ModelIDKey> {
  constructor(fetch: Fetch, parentResourceEndpoint: string) {
    super({
      fetch,
      schema: SMember.schema,
      modelIDKey,
      resourceEndpoint: parentResourceEndpoint,
    });
  }

  protected _getCRUDEndpoint(id: ProjectID): string {
    return `${this._getEndpoint()}/${id}/members`;
  }

  public async list<P extends BasePlatformData>(projectID: ProjectID): Promise<Member<P>[]> {
    s.assert(projectID, SProjectID);

    const { data } = await this.fetch.get<Member<P>[]>(this._getCRUDEndpoint(projectID));

    return data;
  }

  public async getCurrentUser<P extends BasePlatformData>(projectID: ProjectID): Promise<Member<P>> {
    s.assert(projectID, SProjectID);

    const { data } = await this.fetch.get<Member<P>>(`${this._getEndpoint()}/${projectID}/member`);

    return data;
  }

  public async createCurrentUser<P extends BasePlatformData>(projectID: ProjectID, body: Omit<Member<P>, ModelIDKey>): Promise<Member<P>> {
    s.assert(projectID, SProjectID);
    this._assertPutAndPostBody(body);

    const { data } = await this.fetch.post<Member<P>>(this._getCRUDEndpoint(projectID), body);

    return data;
  }

  public async updateCurrentUser<P extends BasePlatformData>(projectID: ProjectID, body: Partial<Member<P>>): Promise<Partial<Member<P>>> {
    s.assert(projectID, SProjectID);
    this._assertPatchBody(body);

    const { data } = await this.fetch.patch<Member<P>>(this._getCRUDEndpoint(projectID), body);

    return data;
  }

  public async deleteCurrentUser(projectID: ProjectID): Promise<CreatorID> {
    s.assert(projectID, SProjectID);

    const { data } = await this.fetch.delete<CreatorID>(this._getCRUDEndpoint(projectID));

    return data;
  }
}

export default MembersResource;
