import { Models } from '@voiceflow/base-types';

import type Fetch from '@/fetch';

import { Fields } from '../base';
import CrudResource from '../crud';
import { ENDPOINT } from './constants';
import MemberResource from './member';

export const modelIDKey = '_id';
export type ModelIDKey = typeof modelIDKey;

type BasePlatformData = Models.BasePlatformData;
type WorkspaceID = Models.WorkspaceID;

class ProjectResource extends CrudResource<Models.Project<BasePlatformData, BasePlatformData>, ModelIDKey, ProjectResource, 'creatorID'> {
  public member: MemberResource;

  constructor(fetch: Fetch) {
    super({
      fetch,
      clazz: ProjectResource,
      endpoint: ENDPOINT,
    });

    this.member = new MemberResource(fetch);
  }

  public async list<P extends Partial<Models.Project<BasePlatformData, BasePlatformData>>>(workspaceID: WorkspaceID, fields: Fields): Promise<P[]>;

  public async list<P extends BasePlatformData, M extends BasePlatformData>(workspaceID: WorkspaceID): Promise<Models.Project<P, M>[]>;

  public async list<P extends Models.Project<any, any> = Models.Project<BasePlatformData, BasePlatformData>>(workspaceID: WorkspaceID): Promise<P[]>;

  public async list(workspaceID: WorkspaceID, fields?: Fields): Promise<Models.Project<any, any>[] | Partial<Models.Project<any, any>>[]> {
    const { data } = await this.fetch.get<Models.Project<any, any>[] | Partial<Models.Project<any, any>>[]>(
      `workspaces/${workspaceID}/projects${this._getFieldsQuery(fields)}`
    );

    return data;
  }

  public async get<P extends Partial<Models.Project<BasePlatformData, BasePlatformData>>>(id: Models.ProjectID, fields: string[]): Promise<P>;

  public async get<P extends BasePlatformData, M extends BasePlatformData>(id: Models.ProjectID): Promise<Models.Project<P, M>>;

  public async get<P extends Models.Project<any, any> = Models.Project<BasePlatformData, BasePlatformData>>(id: Models.ProjectID): Promise<P>;

  public async get(id: Models.ProjectID, fields?: string[]): Promise<Models.Project<any, any> | Partial<Models.Project<any, any>>> {
    return fields ? super._getByID(id, fields) : super._getByID(id);
  }

  public async create<P extends BasePlatformData, M extends BasePlatformData>(
    body: Omit<Models.Project<P, M>, ModelIDKey | 'creatorID'>
  ): Promise<Models.Project<P, M>>;

  public async create<P extends Omit<Models.Project<any, any>, ModelIDKey | 'creatorID'>>(
    body: P
  ): Promise<P & Pick<Models.Project<any, any>, ModelIDKey | 'creatorID'>>;

  public async create(body: Omit<Models.Project<any, any>, ModelIDKey | 'creatorID'>): Promise<Models.Project<any, any>> {
    return super._post(body);
  }

  public async update<P extends BasePlatformData, M extends BasePlatformData>(
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

  public async updatePlatformData<P extends Partial<BasePlatformData>>(id: Models.ProjectID, body: P): Promise<P> {
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

  public async getPrototype<P extends Models.ProjectPrototype>(id: Models.ProjectID): Promise<P> {
    const { data } = await this.fetch.get<P>(`${this._getCRUDEndpoint(id)}/prototype`);

    return data;
  }
}

export default ProjectResource;
