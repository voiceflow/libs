import * as s from 'superstruct';

import Fetch from '@/fetch';
import { Diagram, Program, SVersion, Version, VersionID, VersionPlatformData } from '@/models';

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

  public async create<P extends VersionPlatformData>(body: Omit<Version<P>, ModelKey | 'created' | 'creatorID'>): Promise<Version<P>> {
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

  public async getDiagrams<T extends Partial<Diagram>>(id: VersionID, fields: string[]): Promise<T[]>;

  public async getDiagrams<T extends Diagram = Diagram>(id: VersionID): Promise<T[]>;

  public async getDiagrams(id: VersionID, fields?: string[]) {
    this._assertModelID(id);

    const { data } = await this.fetch.get(`${this._getCRUDEndpoint(id)}/diagrams${this._getFieldsQuery(fields)}`);

    return data;
  }

  public async export<D extends VersionPlatformData, P extends Program>(id: VersionID) {
    this._assertModelID(id);

    const { data } = await this.fetch.get<{ version: Version<D>; programs: P[] }>(`${this._getCRUDEndpoint(id)}/export`);

    return data;
  }
}

export default VersionResource;
