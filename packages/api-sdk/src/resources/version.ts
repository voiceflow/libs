import * as s from 'superstruct';

import Fetch from '@/fetch';
import { Diagram, Program, Project, SVersion, Version, VersionID, VersionPlatformData, VersionPrototype } from '@/models';

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

  public async get(id: VersionID, fields?: string[]) {
    return fields ? super._getByID(id, fields) : super._getByID(id);
  }

  public async create<P extends VersionPlatformData>(body: Omit<Version<P>, ModelKey | 'creatorID'>): Promise<Version<P>> {
    return super._post<Version<P>>(body);
  }

  public async update<P extends VersionPlatformData>(id: VersionID, body: Partial<Version<P>>): Promise<Partial<Version<P>>> {
    return super._patch<Version<P>>(id, body);
  }

  public async delete(id: VersionID): Promise<VersionID> {
    return super._delete(id);
  }

  public async updatePlatformData<P extends VersionPlatformData>(id: VersionID, body: Partial<P>): Promise<Partial<P>> {
    this._assertModelID(id);

    const { data } = await this.fetch.patch<P>(`${this._getCRUDEndpoint(id)}/platform`, body);

    return data;
  }

  public async updatePlatformDataSettings<P extends VersionPlatformData['settings']>(id: VersionID, body: Partial<P>): Promise<Partial<P>> {
    this._assertModelID(id);
    s.assert(body, SVersion.schema.platformData.schema.settings);

    const { data } = await this.fetch.patch<P>(`${this._getCRUDEndpoint(id)}/platform`, body, { path: 'settings' });

    return data;
  }

  public async updatePlatformDataPublishing<P extends VersionPlatformData['publishing']>(id: VersionID, body: P): Promise<P> {
    this._assertModelID(id);
    s.assert(body, SVersion.schema.platformData.schema.publishing);

    const { data } = await this.fetch.patch<P>(`${this._getCRUDEndpoint(id)}/platform`, body, { path: 'publishing' });

    return data;
  }

  public async getPrograms<T extends Partial<Program>>(id: VersionID, fields: string[]): Promise<T[]>;

  public async getPrograms<T extends Program = Program>(id: VersionID): Promise<T[]>;

  public async getPrograms(id: VersionID, fields?: string[]) {
    this._assertModelID(id);

    const { data } = await this.fetch.get(`${this._getCRUDEndpoint(id)}/programs${this._getFieldsQuery(fields)}`);

    return data;
  }

  public async getPrototypePrograms<T extends Partial<Program>>(id: VersionID, fields: string[]): Promise<T[]>;

  public async getPrototypePrograms<T extends Program = Program>(id: VersionID): Promise<T[]>;

  public async getPrototypePrograms(id: VersionID, fields?: string[]) {
    this._assertModelID(id);

    const { data } = await this.fetch.get(`${this._getCRUDEndpoint(id)}/prototype-programs${this._getFieldsQuery(fields)}`);

    return data;
  }

  public async getDiagrams<T extends Partial<Diagram>>(id: VersionID, fields: string[]): Promise<T[]>;

  public async getDiagrams<T extends Diagram = Diagram>(id: VersionID): Promise<T[]>;

  public async getDiagrams(id: VersionID, fields?: string[]) {
    this._assertModelID(id);

    const { data } = await this.fetch.get(`${this._getCRUDEndpoint(id)}/diagrams${this._getFieldsQuery(fields)}`);

    return data;
  }

  public async export<P extends Project<any, any>, V extends Version<any>, D extends Diagram, PM extends Program>(
    id: VersionID,
    options?: { programs: true }
  ): Promise<{ project: P; version: V; diagrams: Record<string, D>; programs: Record<string, PM> }>;

  public async export<P extends Project<any, any>, V extends Version<any>, D extends Diagram>(id: VersionID, options?: { programs?: boolean }) {
    this._assertModelID(id);

    const { data } = await this.fetch.get<{ project: P; version: V; diagrams: Record<string, D> }>(
      `${this._getCRUDEndpoint(id)}/export${options?.programs ? '?programs=1' : ''}`
    );

    return data;
  }

  public async import<P extends Project<any, any>>(
    workspaceID: string,
    data: { project: P; version: Version<any>; diagrams: Record<string, Diagram<any>> }
  ) {
    const { data: newProject } = await this.fetch.post<P>(`${this._getCRUDEndpoint()}/import`, { workspaceID, data });

    return newProject;
  }

  public async getPrototype(id: VersionID, body: { isPublic?: boolean } = {}) {
    this._assertModelID(id);

    const query = body.isPublic ? `?isPublic=${body.isPublic}` : '';
    const { data } = await this.fetch.get<VersionPrototype>(`${this._getCRUDEndpoint(id)}/prototype${query}`);

    return data;
  }

  public async updatePrototype<P extends VersionPrototype>(id: VersionID, body: Partial<P>): Promise<P> {
    this._assertModelID(id);

    const { data } = await this.fetch.patch<P>(`${this._getCRUDEndpoint(id)}/prototype`, body);

    return data;
  }

  public async updatePrototypeSettings<P extends VersionPrototype['settings']>(id: VersionID, body: Partial<P>): Promise<Partial<P>> {
    this._assertModelID(id);
    s.assert(body, SVersion.schema.prototype.schema.settings);

    const { data } = await this.fetch.patch<P>(`${this._getCRUDEndpoint(id)}/prototype`, body, { path: 'settings' });

    return data;
  }

  public async checkPrototypeSharedLogin(id: VersionID, body: { password: string }) {
    this._assertModelID(id);

    const { data } = await this.fetch.put<{ versionID: string }>(`${this._getCRUDEndpoint(id)}/prototype/share/login`, body);

    return data;
  }

  public async getPrototypePlan(id: VersionID) {
    this._assertModelID(id);

    const { data } = await this.fetch.get<{ plan: string }>(`${this._getCRUDEndpoint(id)}/prototype/plan`);

    return data;
  }
}

export default VersionResource;
