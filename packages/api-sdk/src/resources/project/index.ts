import * as s from 'superstruct';

import type Fetch from '@/fetch';
import { BasePlatformData, DiagramID, Project, ProjectID, SProject, SWorkspaceID, Version, VersionPlatformData, WorkspaceID } from '@/models';

import CrudResource from '../crud';
import MembersResource from './members';

export const ENDPOINT = 'projects';

export const modelIDKey = '_id';
export type ModelIDKey = typeof modelIDKey;

class ProjectResource extends CrudResource<typeof SProject['schema'], ModelIDKey> {
  public members: MembersResource;

  constructor(fetch: Fetch) {
    super({
      fetch,
      schema: SProject.schema,
      modelIDKey,
      resourceEndpoint: ENDPOINT,
    });

    this.members = new MembersResource(fetch, ENDPOINT);
  }

  async list<P extends BasePlatformData, M extends BasePlatformData>(workspaceID: WorkspaceID): Promise<Project<P, M>[]> {
    s.assert(workspaceID, SWorkspaceID);

    const { data } = await this.fetch.get<Project<P, M>[]>(`workspace/${workspaceID}/projects`);

    return data;
  }

  public get<P extends BasePlatformData, M extends BasePlatformData>(id: ProjectID): Promise<Project<P, M>> {
    return super._getByID<Project<P, M>>(id);
  }

  public create<P extends BasePlatformData, M extends BasePlatformData>(body: Omit<Project<P, M>, ModelIDKey | 'created'>): Promise<Project<P, M>> {
    return super._post<Project<P, M>>(body);
  }

  public update<P extends BasePlatformData, M extends BasePlatformData>(
    id: ProjectID,
    body: Partial<Project<P, M>>
  ): Promise<Partial<Project<P, M>>> {
    return super._patch<Project<P, M>>(id, body);
  }

  public delete(id: ProjectID): Promise<ProjectID> {
    return super._delete(id);
  }

  public async updatePlatformData<P extends BasePlatformData>(id: ProjectID, body: Partial<P>): Promise<Partial<P>> {
    this._assertModelID(id);
    s.assert(body, SProject.schema.platformData);

    const { data } = await this.fetch.patch<P>(`${this._getCRUDEndpoint(id)}/platform`, body);

    return data;
  }

  public async getVersions<P extends VersionPlatformData>(id: ProjectID): Promise<Version<P>[]> {
    this._assertModelID(id);

    const { data } = await this.fetch.get<Version<P>[]>(`${this._getCRUDEndpoint(id)}/versions`);

    return data;
  }
}

export default ProjectResource;
