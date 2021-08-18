import * as s from 'superstruct';

import Fetch from '@/fetch';
import { BasePlatformData, Diagram, Program, Project, SVersion, Version, VersionID, VersionPlatformData, VersionPrototype } from '@/models';

import CrudResource from './crud';

export const ENDPOINT = 'versions';

export type ModelKey = '_id';

class VersionResource extends CrudResource<typeof SVersion['schema'], ModelKey, VersionResource, 'creatorID'> {
  _partialPlatformData = s.partial(SVersion.schema.platformData);

  constructor(fetch: Fetch) {
    super({
      fetch,
      clazz: VersionResource,
      schema: SVersion.schema,
      modelIDKey: '_id',
      resourceEndpoint: ENDPOINT,
      postPutExcludedFields: ['creatorID'],
    });
  }

  public async get<T extends Partial<Version<VersionPlatformData>>>(id: VersionID, fields: string[]): Promise<T>;

  public async get<P extends VersionPlatformData>(id: VersionID): Promise<Version<P>>;

  public async get<T extends Version<any, any, string> = Version<VersionPlatformData>>(id: VersionID): Promise<T>;

  public async get(id: VersionID, fields?: string[]): Promise<Version<any, any, string>> {
    return fields ? super._getByID(id, fields) : super._getByID(id);
  }

  public async create<P extends VersionPlatformData>(body: Omit<Version<P>, ModelKey | 'creatorID'>): Promise<Version<P>>;

  public async create<P extends Omit<Version<any, any, string>, ModelKey | 'creatorID'>>(
    body: P
  ): Promise<P & Pick<Version<any, any, string>, ModelKey | 'creatorID'>>;

  public async create(body: Omit<Version<any, any, string>, ModelKey | 'creatorID'>): Promise<Version<any, any, string>> {
    return super._post(body);
  }

  public async update<P extends VersionPlatformData>(id: VersionID, body: Partial<Version<P>>): Promise<Partial<Version<P>>>;

  public async update<P extends Partial<Version<any, any, string>>>(id: VersionID, body: P): Promise<P>;

  public async update(id: VersionID, body: Partial<Version<any, any, string>>): Promise<Partial<Version<any, any, string>>> {
    return super._patch(id, body);
  }

  public async delete(id: VersionID): Promise<VersionID> {
    return super._delete(id);
  }

  public async updatePlatformData<P extends Partial<VersionPlatformData>>(id: VersionID, body: P): Promise<P> {
    this._assertModelID(id);

    const { data } = await this.fetch.patch<P>(`${this._getCRUDEndpoint(id)}/platform`, body);

    return data;
  }

  public async updatePlatformDataSettings<P extends Partial<VersionPlatformData['settings']>>(id: VersionID, body: P): Promise<P> {
    this._assertModelID(id);
    s.assert(body, SVersion.schema.platformData.schema.settings);

    const { data } = await this.fetch.patch<P>(`${this._getCRUDEndpoint(id)}/platform`, body, { path: 'settings' });

    return data;
  }

  public async updatePlatformDataPublishing<P extends Partial<VersionPlatformData['publishing']>>(id: VersionID, body: P): Promise<P> {
    this._assertModelID(id);
    s.assert(body, SVersion.schema.platformData.schema.publishing);

    const { data } = await this.fetch.patch<P>(`${this._getCRUDEndpoint(id)}/platform`, body, { path: 'publishing' });

    return data;
  }

  public async getPrograms<T extends Partial<Program>>(id: VersionID, fields: string[]): Promise<T[]>;

  public async getPrograms<T extends Program<any> = Program>(id: VersionID): Promise<T[]>;

  public async getPrograms(id: VersionID, fields?: string[]): Promise<Program[]> {
    this._assertModelID(id);

    const { data } = await this.fetch.get<Program[]>(`${this._getCRUDEndpoint(id)}/programs${this._getFieldsQuery(fields)}`);

    return data;
  }

  public async getPrototypePrograms<T extends Partial<Program>>(id: VersionID, fields: string[]): Promise<T[]>;

  public async getPrototypePrograms<T extends Program<any> = Program>(id: VersionID): Promise<T[]>;

  public async getPrototypePrograms(id: VersionID, fields?: string[]): Promise<Program[]> {
    this._assertModelID(id);

    const { data } = await this.fetch.get<Program[]>(`${this._getCRUDEndpoint(id)}/prototype-programs${this._getFieldsQuery(fields)}`);

    return data;
  }

  public async getDiagrams<T extends Partial<Diagram>>(id: VersionID, fields: string[]): Promise<T[]>;

  public async getDiagrams<T extends Diagram<any> = Diagram>(id: VersionID): Promise<T[]>;

  public async getDiagrams(id: VersionID, fields?: string[]): Promise<Diagram[]> {
    this._assertModelID(id);

    const { data } = await this.fetch.get<Diagram[]>(`${this._getCRUDEndpoint(id)}/diagrams${this._getFieldsQuery(fields)}`);

    return data;
  }

  public async export<
    P extends Project<any, any> = Project<BasePlatformData, BasePlatformData>,
    V extends Version<any> = Version<VersionPlatformData>,
    D extends Diagram = Diagram,
    PM extends Program = Program
  >(id: VersionID, options: { programs: true }): Promise<{ project: P; version: V; diagrams: Record<string, D>; programs: Record<string, PM> }>;

  public async export<
    P extends Project<any, any> = Project<BasePlatformData, BasePlatformData>,
    V extends Version<any> = Version<VersionPlatformData>,
    D extends Diagram = Diagram
  >(id: VersionID, options?: { programs?: boolean }): Promise<{ project: P; version: V; diagrams: Record<string, D> }>;

  public async export(
    id: VersionID,
    options?: { programs?: boolean }
  ): Promise<{ project: Project<any, any>; version: Version<any>; diagrams: Record<string, Diagram>; programs?: Record<string, Program> }> {
    this._assertModelID(id);

    const { data } = await this.fetch.get<{
      project: Project<any, any>;
      version: Version<any>;
      diagrams: Record<string, Diagram>;
      programs?: Record<string, Program>;
    }>(`${this._getCRUDEndpoint(id)}/export${options?.programs ? '?programs=1' : ''}`);

    return data;
  }

  public async import<P extends Project<any, any> = Project<BasePlatformData, BasePlatformData>>(
    workspaceID: string,
    data: { project: P; version: Version<any>; diagrams: Record<string, Diagram<any>> }
  ): Promise<P> {
    const { data: newProject } = await this.fetch.post<P>(`${this._getCRUDEndpoint()}/import`, { workspaceID, data });

    return newProject;
  }

  public async getPrototype<T extends VersionPrototype>(id: VersionID, body: { isPublic?: boolean } = {}): Promise<T> {
    this._assertModelID(id);

    const query = body.isPublic ? `?isPublic=${body.isPublic}` : '';
    const { data } = await this.fetch.get<T>(`${this._getCRUDEndpoint(id)}/prototype${query}`);

    return data;
  }

  public async updatePrototype<P extends Partial<P>>(id: VersionID, body: P): Promise<P> {
    this._assertModelID(id);

    const { data } = await this.fetch.patch<P>(`${this._getCRUDEndpoint(id)}/prototype`, body);

    return data;
  }

  public async updatePrototypeSettings<P extends Partial<VersionPrototype['settings']>>(id: VersionID, body: P): Promise<P> {
    this._assertModelID(id);
    s.assert(body, SVersion.schema.prototype.schema.settings);

    const { data } = await this.fetch.patch<P>(`${this._getCRUDEndpoint(id)}/prototype`, body, { path: 'settings' });

    return data;
  }

  public async checkPrototypeSharedLogin(id: VersionID, body: { password: string }): Promise<{ versionID: string }> {
    this._assertModelID(id);

    const { data } = await this.fetch.put<{ versionID: string }>(`${this._getCRUDEndpoint(id)}/prototype/share/login`, body);

    return data;
  }

  public async getPrototypePlan(id: VersionID): Promise<{ plan: string }> {
    this._assertModelID(id);

    const { data } = await this.fetch.get<{ plan: string }>(`${this._getCRUDEndpoint(id)}/prototype/plan`);

    return data;
  }
}

export default VersionResource;
