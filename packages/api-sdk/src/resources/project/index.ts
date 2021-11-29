import { Models } from '@voiceflow/base-types';

import type Fetch from '@/fetch';

import { Fields } from '../base';
import CrudResource from '../crud';
import { ENDPOINT } from './constants';
import MemberResource from './member';

export const modelIDKey = '_id';
export type ModelIDKey = typeof modelIDKey;

class ProjectResource extends CrudResource<
  Models.Project<Models.BasePlatformData, Models.BasePlatformData>,
  ModelIDKey,
  ProjectResource,
  'creatorID'
> {
  public member: MemberResource;

  constructor(fetch: Fetch) {
    super({
      fetch,
      clazz: ProjectResource,
      endpoint: ENDPOINT,
    });

    this.member = new MemberResource(fetch);
  }

  public async list<P extends Partial<Models.Project<Models.BasePlatformData, Models.BasePlatformData>>>(
    workspaceID: Models.WorkspaceID,
    fields: Fields
  ): Promise<P[]>;

  public async list<P extends Models.BasePlatformData, M extends Models.BasePlatformData>(
    workspaceID: Models.WorkspaceID
  ): Promise<Models.Project<P, M>[]>;

  public async list<P extends Models.Project<any, any> = Models.Project<Models.BasePlatformData, Models.BasePlatformData>>(
    workspaceID: Models.WorkspaceID
  ): Promise<P[]>;

  public async list(workspaceID: Models.WorkspaceID, fields?: Fields): Promise<Models.Project<any, any>[] | Partial<Models.Project<any, any>>[]> {
    const { data } = await this.fetch.get<Models.Project<any, any>[] | Partial<Models.Project<any, any>>[]>(
      `workspaces/${workspaceID}/projects${this._getFieldsQuery(fields)}`
    );

    return data;
  }

  public async get<P extends Partial<Models.Project<Models.BasePlatformData, Models.BasePlatformData>>>(
    id: Models.ProjectID,
    fields: string[]
  ): Promise<P>;

  public async get<P extends Models.BasePlatformData, M extends Models.BasePlatformData>(id: Models.ProjectID): Promise<Models.Project<P, M>>;

  public async get<P extends Models.Project<any, any> = Models.Project<Models.BasePlatformData, Models.BasePlatformData>>(
    id: Models.ProjectID
  ): Promise<P>;

  public async get(id: Models.ProjectID, fields?: string[]): Promise<Models.Project<any, any> | Partial<Models.Project<any, any>>> {
    return fields ? super._getByID(id, fields) : super._getByID(id);
  }

  public async create<P extends Models.BasePlatformData, M extends Models.BasePlatformData>(
    body: Omit<Models.Project<P, M>, ModelIDKey | 'creatorID'>
  ): Promise<Models.Project<P, M>>;

  public async create<P extends Omit<Models.Project<any, any>, ModelIDKey | 'creatorID'>>(
    body: P
  ): Promise<P & Pick<Models.Project<any, any>, ModelIDKey | 'creatorID'>>;

  public async create(body: Omit<Models.Project<any, any>, ModelIDKey | 'creatorID'>): Promise<Models.Project<any, any>> {
    return super._post(body);
  }

  public async update<P extends Models.BasePlatformData, M extends Models.BasePlatformData>(
    id: Models.ProjectID,
    body: Partial<Models.Project<P, M>>
  ): Promise<Partial<Models.Project<P, M>>>;

  public async update<P extends Partial<Models.Project<any, any>>>(id: Models.ProjectID, body: P): Promise<P>;

  public async update(id: Models.ProjectID, body: Partial<Models.Project<any, any>>): Promise<Partial<Models.Project<any, any>>> {
    return super._patch(id, body);
  }

  public async delete(id: Models.ProjectID): Promise<Models.ProjectID> {
    return super._delete(id);
  }

  public async updatePlatformData<P extends Partial<Models.BasePlatformData>>(id: Models.ProjectID, body: P): Promise<P> {
    const { data } = await this.fetch.patch<P>(`${this._getCRUDEndpoint(id)}/platform`, body);

    return data;
  }

  public async getVersions<P extends Partial<Models.Version<Models.VersionPlatformData>>>(id: Models.ProjectID, fields: string[]): Promise<P[]>;

  public async getVersions<P extends Models.Version<any> = Models.Version<Models.VersionPlatformData>>(id: Models.ProjectID): Promise<P[]>;

  public async getVersions<P extends Models.VersionPlatformData>(id: Models.ProjectID): Promise<Models.Version<P>[]>;

  public async getVersions(id: Models.ProjectID, fields?: string[]): Promise<Models.Version<any>[]> {
    const { data } = await this.fetch.get<Models.Version<any>[]>(`${this._getCRUDEndpoint(id)}/versions${this._getFieldsQuery(fields)}`);

    return data;
  }

  public async getVersionsV2<P extends Models.VersionPlatformData>(
    id: Models.ProjectID,
    options?: { offset?: number; limit?: number }
  ): Promise<Models.Version<P>[]>;

  public async getVersionsV2(id: Models.ProjectID, options: { offset?: number; limit?: number } = {}): Promise<Models.Version<any>[]> {
    const { offset = 0, limit = 10 } = options;
    const { data } = await this.fetch.get<Models.Version<any>[]>(`${this._getCRUDEndpoint(id)}/projectVersions?offset=${offset}&limit=${limit}`);

    return data;
  }

  public async getPrototype<P extends Models.ProjectPrototype>(id: Models.ProjectID): Promise<P> {
    const { data } = await this.fetch.get<P>(`${this._getCRUDEndpoint(id)}/prototype`);

    return data;
  }

  public async getReportTags(id: Models.ProjectID) {
    const { data } = await this.fetch.get(`${this._getCRUDEndpoint(id)}/tags`);
    return data;
  }

  public async updateReportTag(id: Models.ProjectID, tagID: Models.TagID, body: Models.ReportTag) {
    const { data } = await this.fetch.patch(`${this._getCRUDEndpoint(id)}/tags/${tagID}`, body);
    return data;
  }

  public async createReportTag(id: Models.ProjectID, body: Models.ReportTag) {
    const { data } = await this.fetch.put(`${this._getCRUDEndpoint(id)}/tags`, body);
    return data;
  }

  public async deleteReportTag(id: Models.ProjectID, tagID: Models.TagID) {
    const { data } = await this.fetch.delete(`${this._getCRUDEndpoint(id)}/tags/${tagID}`);
    return data;
  }
}

export default ProjectResource;
