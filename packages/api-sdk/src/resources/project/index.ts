import * as s from 'superstruct';

import type Fetch from '@/fetch';
import { BasePlatformData, Project, ProjectID, ProjectPrototype, SProject, SWorkspaceID, Version, VersionPlatformData, WorkspaceID } from '@/models';

import CrudResource from '../crud';
import { ENDPOINT } from './constants';
import MemberResource from './member';

export const modelIDKey = '_id';
export type ModelIDKey = typeof modelIDKey;

class ProjectResource extends CrudResource<typeof SProject['schema'], ModelIDKey, ProjectResource, 'creatorID'> {
  public member: MemberResource;

  constructor(fetch: Fetch) {
    super({
      fetch,
      clazz: ProjectResource,
      schema: SProject.schema,
      modelIDKey,
      resourceEndpoint: ENDPOINT,
      postPutExcludedFields: ['creatorID'],
    });

    this.member = new MemberResource(fetch);
  }

  public async list<P extends Partial<Project<BasePlatformData, BasePlatformData>>>(workspaceID: WorkspaceID, fields: string[]): Promise<P[]>;

  public async list<P extends BasePlatformData, M extends BasePlatformData>(workspaceID: WorkspaceID): Promise<Project<P, M>[]>;

  public async list(workspaceID: WorkspaceID, fields?: string[]) {
    s.assert(workspaceID, SWorkspaceID);

    const { data } = await this.fetch.get(`workspaces/${workspaceID}/projects${this._getFieldsQuery(fields)}`);

    return data;
  }

  public async get<P extends Partial<Project<BasePlatformData, BasePlatformData>>>(id: ProjectID, fields: string[]): Promise<P>;

  public async get<P extends BasePlatformData, M extends BasePlatformData>(id: ProjectID): Promise<Project<P, M>>;

  public async get(id: ProjectID, fields?: string[]) {
    return fields ? super._getByID(id, fields) : super._getByID(id);
  }

  public async create<P extends BasePlatformData, M extends BasePlatformData>(
    body: Omit<Project<P, M>, ModelIDKey | 'creatorID'>
  ): Promise<Project<P, M>> {
    return super._post<Project<P, M>>(body);
  }

  public async update<P extends BasePlatformData, M extends BasePlatformData>(
    id: ProjectID,
    body: Partial<Project<P, M>>
  ): Promise<Partial<Project<P, M>>> {
    return super._patch<Project<P, M>>(id, body);
  }

  public async delete(id: ProjectID): Promise<ProjectID> {
    return super._delete(id);
  }

  public async updatePlatformData<P extends BasePlatformData>(id: ProjectID, body: Partial<P>): Promise<Partial<P>> {
    this._assertModelID(id);
    s.assert(body, SProject.schema.platformData);

    const { data } = await this.fetch.patch<P>(`${this._getCRUDEndpoint(id)}/platform`, body);

    return data;
  }

  public async getVersions<P extends Partial<Version<VersionPlatformData>>>(id: ProjectID, fields: string[]): Promise<P[]>;

  public async getVersions<P extends VersionPlatformData>(id: ProjectID): Promise<Version<P>[]>;

  public async getVersions(id: ProjectID, fields?: string[]) {
    this._assertModelID(id);

    const { data } = await this.fetch.get(`${this._getCRUDEndpoint(id)}/versions${this._getFieldsQuery(fields)}`);

    return data;
  }

  public async getPrototype(id: ProjectID) {
    this._assertModelID(id);

    const { data } = await this.fetch.get<ProjectPrototype>(`${this._getCRUDEndpoint(id)}/prototype`);

    return data;
  }
}

export default ProjectResource;
