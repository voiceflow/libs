import * as s from 'superstruct';

import type Fetch from '@/fetch';
import { Diagram, Program, SVersion, Version, VersionID, VersionPlatformData } from '@/models';

import CrudResource from './crud';

export const ENDPOINT = 'versions';

export type ModelKey = '_id';

class VersionResource extends CrudResource<typeof SVersion['schema'], ModelKey> {
  constructor(fetch: Fetch) {
    super({
      fetch,
      schema: SVersion.schema,
      modelIDKey: '_id',
      resourceEndpoint: ENDPOINT,
    });
  }

  public get<P extends VersionPlatformData>(id: VersionID): Promise<Version<P>> {
    return super._getByID<Version<P>>(id);
  }

  public create<P extends VersionPlatformData>(body: Omit<Version<P>, ModelKey | 'created'>): Promise<Version<P>> {
    return super._post<Version<P>>(body);
  }

  public update<P extends VersionPlatformData>(id: VersionID, body: Partial<Version<P>>): Promise<Partial<Version<P>>> {
    return super._patch<Version<P>>(id, body);
  }

  public delete(id: VersionID): Promise<VersionID> {
    return super._delete(id);
  }

  public async updatePlatformData<P extends VersionPlatformData>(id: VersionID, body: Partial<P>): Promise<Partial<P>> {
    this._assertModelID(id);
    s.assert(body, SVersion.schema.platformData);

    const { data } = await this.fetch.patch<P>(`${this._getCRUDEndpoint(id)}/platform`, body);

    return data;
  }

  public async updatePlatformDataSettings<P extends VersionPlatformData['settings']>(id: VersionID, body: Partial<P>): Promise<Partial<P>> {
    this._assertModelID(id);
    s.assert(body, SVersion.schema.platformData.schema.settings);

    const { data } = await this.fetch.patch<P>(`${this._getCRUDEndpoint(id)}/settings`, body);

    return data;
  }

  public async updatePlatformDataPublishing<P extends VersionPlatformData['publishing']>(id: VersionID, body: Partial<P>): Promise<Partial<P>> {
    this._assertModelID(id);
    s.assert(body, SVersion.schema.platformData.schema.publishing);

    const { data } = await this.fetch.patch<P>(`${this._getCRUDEndpoint(id)}/publishing`, body);

    return data;
  }

  public async getPrograms(id: VersionID): Promise<Program[]> {
    this._assertModelID(id);

    const { data } = await this.fetch.get<Program[]>(`${this._getCRUDEndpoint(id)}/programs`);

    return data;
  }

  public async getDiagrams(id: VersionID): Promise<Diagram[]> {
    this._assertModelID(id);

    const { data } = await this.fetch.get<Diagram[]>(`${this._getCRUDEndpoint(id)}/diagrams`);

    return data;
  }
}

export default VersionResource;
