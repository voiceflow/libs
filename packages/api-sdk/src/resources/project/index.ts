import * as s from 'superstruct';

import type Fetch from '@/fetch';
import { BasePlatformData, Project, ProjectID, ProjectPrototype, SProject, SWorkspaceID, Version, VersionPlatformData, WorkspaceID } from '@/models';

import { Fields } from '../base';
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

  public async list<P extends Partial<Project<BasePlatformData, BasePlatformData>>>(workspaceID: WorkspaceID, fields: Fields): Promise<P[]>;

  public async list<P extends BasePlatformData, M extends BasePlatformData>(workspaceID: WorkspaceID): Promise<Project<P, M>[]>;

  public async list<P extends Project<any, any> = Project<BasePlatformData, BasePlatformData>>(workspaceID: WorkspaceID): Promise<P[]>;

  public async list(workspaceID: WorkspaceID, fields?: Fields): Promise<Project<any, any>[] | Partial<Project<any, any>>[]> {
    s.assert(workspaceID, SWorkspaceID);

    const { data } = await this.fetch.get<Project<any, any>[] | Partial<Project<any, any>>[]>(
      `workspaces/${workspaceID}/projects${this._getFieldsQuery(fields)}`
    );

    return data;
  }

  public async get<P extends Partial<Project<BasePlatformData, BasePlatformData>>>(id: ProjectID, fields: string[]): Promise<P>;

  public async get<P extends BasePlatformData, M extends BasePlatformData>(id: ProjectID): Promise<Project<P, M>>;

  public async get<P extends Project<any, any> = Project<BasePlatformData, BasePlatformData>>(id: ProjectID): Promise<P>;

  public async get(id: ProjectID, fields?: string[]): Promise<Project<any, any> | Partial<Project<any, any>>> {
    return fields ? super._getByID(id, fields) : super._getByID(id);
  }

  public async create<P extends BasePlatformData, M extends BasePlatformData>(
    body: Omit<Project<P, M>, ModelIDKey | 'creatorID'>
  ): Promise<Project<P, M>>;

  public async create<P extends Omit<Project<any, any>, ModelIDKey | 'creatorID'>>(
    body: P
  ): Promise<P & Pick<Project<any, any>, ModelIDKey | 'creatorID'>>;

  public async create(body: Omit<Project<any, any>, ModelIDKey | 'creatorID'>): Promise<Project<any, any>> {
    return super._post(body);
  }

  public async update<P extends BasePlatformData, M extends BasePlatformData>(
    id: ProjectID,
    body: Partial<Project<P, M>>
  ): Promise<Partial<Project<P, M>>>;

  public async update<P extends Partial<Project<any, any>>>(id: ProjectID, body: P): Promise<P>;

  public async update(id: ProjectID, body: Partial<Project<any, any>>): Promise<Partial<Project<any, any>>> {
    return super._patch(id, body);
  }

  public async delete(id: ProjectID): Promise<ProjectID> {
    return super._delete(id);
  }

  public async updatePlatformData<P extends Partial<BasePlatformData>>(id: ProjectID, body: P): Promise<P> {
    this._assertModelID(id);
    s.assert(body, SProject.schema.platformData);

    const { data } = await this.fetch.patch<P>(`${this._getCRUDEndpoint(id)}/platform`, body);

    return data;
  }

  public async getVersions<P extends Partial<Version<VersionPlatformData>>>(id: ProjectID, fields: string[]): Promise<P[]>;

  public async getVersions<P extends Version<any> = Version<VersionPlatformData>>(id: ProjectID): Promise<P[]>;

  public async getVersions<P extends VersionPlatformData>(id: ProjectID): Promise<Version<P>[]>;

  public async getVersions(id: ProjectID, fields?: string[]): Promise<Version<any>[]> {
    this._assertModelID(id);

    const { data } = await this.fetch.get<Version<any>[]>(`${this._getCRUDEndpoint(id)}/versions${this._getFieldsQuery(fields)}`);

    return data;
  }

  public async getPrototype<P extends ProjectPrototype>(id: ProjectID): Promise<P> {
    this._assertModelID(id);

    const { data } = await this.fetch.get<P>(`${this._getCRUDEndpoint(id)}/prototype`);

    return data;
  }
}

export default ProjectResource;
