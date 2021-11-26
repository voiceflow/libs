import { Models } from '@voiceflow/base-types';

import Fetch from '@/fetch';

import { Fields } from './base';
import CrudResource from './crud';

export const ENDPOINT = 'versions';

export type ModelKey = '_id';

class VersionResource extends CrudResource<Models.Version<Models.VersionPlatformData>, ModelKey, VersionResource, 'creatorID'> {
  constructor(fetch: Fetch) {
    super({
      fetch,
      clazz: VersionResource,
      endpoint: ENDPOINT,
    });
  }

  public async get<T extends Partial<Models.Version<Models.VersionPlatformData>>>(id: Models.VersionID, fields: Fields): Promise<T>;

  public async get<P extends Models.VersionPlatformData>(id: Models.VersionID): Promise<Models.Version<P>>;

  public async get<T extends Models.Version<any, any, string> = Models.Version<Models.VersionPlatformData>>(id: Models.VersionID): Promise<T>;

  public async get(id: Models.VersionID, fields?: Fields): Promise<Models.Version<any, any, string>> {
    return fields ? super._getByID(id, fields) : super._getByID(id);
  }

  public async create<P extends Models.VersionPlatformData>(body: Omit<Models.Version<P>, ModelKey | 'creatorID'>): Promise<Models.Version<P>>;

  public async create<P extends Omit<Models.Version<any, any, string>, ModelKey | 'creatorID'>>(
    body: P
  ): Promise<P & Pick<Models.Version<any, any, string>, ModelKey | 'creatorID'>>;

  public async create(body: Omit<Models.Version<any, any, string>, ModelKey | 'creatorID'>): Promise<Models.Version<any, any, string>> {
    return super._post(body);
  }

  public async update<P extends Models.VersionPlatformData>(
    id: Models.VersionID,
    body: Partial<Models.Version<P>>
  ): Promise<Partial<Models.Version<P>>>;

  public async update<P extends Partial<Models.Version<any, any, string>>>(id: Models.VersionID, body: P): Promise<P>;

  public async update(id: Models.VersionID, body: Partial<Models.Version<any, any, string>>): Promise<Partial<Models.Version<any, any, string>>> {
    return super._patch(id, body);
  }

  public async delete(id: Models.VersionID): Promise<Models.VersionID> {
    return super._delete(id);
  }

  public async updatePlatformData<P extends Partial<Models.VersionPlatformData>>(id: Models.VersionID, body: P): Promise<P> {
    const { data } = await this.fetch.patch<P>(`${this._getCRUDEndpoint(id)}/platform`, body);

    return data;
  }

  public async updatePlatformDataSettings<P extends Partial<Models.VersionPlatformData['settings']>>(id: Models.VersionID, body: P): Promise<P> {
    const { data } = await this.fetch.patch<P>(`${this._getCRUDEndpoint(id)}/platform`, body, { path: 'settings' });

    return data;
  }

  public async updatePlatformDataPublishing<P extends Partial<Models.VersionPlatformData['publishing']>>(id: Models.VersionID, body: P): Promise<P> {
    const { data } = await this.fetch.patch<P>(`${this._getCRUDEndpoint(id)}/platform`, body, { path: 'publishing' });

    return data;
  }

  public async getPrograms<T extends Partial<Models.Program>>(id: Models.VersionID, fields: Fields): Promise<T[]>;

  public async getPrograms<T extends Models.Program<any> = Models.Program>(id: Models.VersionID): Promise<T[]>;

  public async getPrograms(id: Models.VersionID, fields?: Fields): Promise<Models.Program[]> {
    const { data } = await this.fetch.get<Models.Program[]>(`${this._getCRUDEndpoint(id)}/programs${this._getFieldsQuery(fields)}`);

    return data;
  }

  public async getPrototypePrograms<T extends Partial<Models.Program>>(id: Models.VersionID, fields: Fields): Promise<T[]>;

  public async getPrototypePrograms<T extends Models.Program<any> = Models.Program>(id: Models.VersionID): Promise<T[]>;

  public async getPrototypePrograms(id: Models.VersionID, fields?: Fields): Promise<Models.Program[]> {
    const { data } = await this.fetch.get<Models.Program[]>(`${this._getCRUDEndpoint(id)}/prototype-programs${this._getFieldsQuery(fields)}`);

    return data;
  }

  public async getDiagrams<T extends Partial<Models.Diagram>>(id: Models.VersionID, fields: Fields): Promise<T[]>;

  public async getDiagrams<T extends Models.Diagram<any> = Models.Diagram>(id: Models.VersionID): Promise<T[]>;

  public async getDiagrams(id: Models.VersionID, fields?: Fields): Promise<Models.Diagram[]> {
    const { data } = await this.fetch.get<Models.Diagram[]>(`${this._getCRUDEndpoint(id)}/diagrams${this._getFieldsQuery(fields)}`);

    return data;
  }

  public async export<
    P extends Models.Project<any, any> = Models.Project<Models.BasePlatformData, Models.BasePlatformData>,
    V extends Models.Version<any> = Models.Version<Models.VersionPlatformData>,
    D extends Models.Diagram = Models.Diagram,
    PM extends Models.Program = Models.Program
  >(
    id: Models.VersionID,
    options: { programs: true }
  ): Promise<{ project: P; version: V; diagrams: Record<string, D>; programs: Record<string, PM> }>;

  public async export<
    P extends Models.Project<any, any> = Models.Project<Models.BasePlatformData, Models.BasePlatformData>,
    V extends Models.Version<any> = Models.Version<Models.VersionPlatformData>,
    D extends Models.Diagram = Models.Diagram
  >(id: Models.VersionID, options?: { programs?: boolean }): Promise<{ project: P; version: V; diagrams: Record<string, D> }>;

  public async export(
    id: Models.VersionID,
    options?: { programs?: boolean }
  ): Promise<{
    project: Models.Project<any, any>;
    version: Models.Version<any>;
    diagrams: Record<string, Models.Diagram>;
    programs?: Record<string, Models.Program>;
  }> {
    const { data } = await this.fetch.get<{
      project: Models.Project<any, any>;
      version: Models.Version<any>;
      diagrams: Record<string, Models.Diagram>;
      programs?: Record<string, Models.Program>;
    }>(`${this._getCRUDEndpoint(id)}/export${options?.programs ? '?programs=1' : ''}`);

    return data;
  }

  public async exportResponses(id: Models.VersionID): Promise<Models.VersionDiagramResponse[]> {
    const { data } = await this.fetch.get<Models.VersionDiagramResponse[]>(`${this._getCRUDEndpoint(id)}/export/responses`);

    return data;
  }

  public async import<P extends Models.Project<any, any> = Models.Project<Models.BasePlatformData, Models.BasePlatformData>>(
    workspaceID: string,
    data: { project: P; version: Models.Version<any>; diagrams: Record<string, Models.Diagram<any>> }
  ): Promise<P> {
    const { data: newProject } = await this.fetch.post<P>(`${this._getCRUDEndpoint()}/import`, { workspaceID, data });

    return newProject;
  }

  public async getPrototype<T extends Models.VersionPrototype>(id: Models.VersionID, body: { isPublic?: boolean } = {}): Promise<T> {
    const query = body.isPublic ? `?isPublic=${body.isPublic}` : '';
    const { data } = await this.fetch.get<T>(`${this._getCRUDEndpoint(id)}/prototype${query}`);

    return data;
  }

  public async updatePrototype<P extends Partial<P>>(id: Models.VersionID, body: P): Promise<P> {
    const { data } = await this.fetch.patch<P>(`${this._getCRUDEndpoint(id)}/prototype`, body);

    return data;
  }

  public async updatePrototypeSettings<P extends Partial<Models.VersionPrototype['settings']>>(id: Models.VersionID, body: P): Promise<P> {
    const { data } = await this.fetch.patch<P>(`${this._getCRUDEndpoint(id)}/prototype`, body, { path: 'settings' });

    return data;
  }

  public async checkPrototypeSharedLogin(id: Models.VersionID, body: { password: string }): Promise<{ versionID: string }> {
    const { data } = await this.fetch.put<{ versionID: string }>(`${this._getCRUDEndpoint(id)}/prototype/share/login`, body);

    return data;
  }

  public async getPrototypePlan(id: Models.VersionID): Promise<{ plan: string }> {
    const { data } = await this.fetch.get<{ plan: string }>(`${this._getCRUDEndpoint(id)}/prototype/plan`);

    return data;
  }
}

export default VersionResource;
