import { BaseModels } from '@voiceflow/base-types';
import { AnyRecord } from '@voiceflow/common';

import { Fields } from '../base';
import CrudResource from '../crud';
import Domain from './domain';

export const ENDPOINT = 'versions';

export type ModelKey = '_id';

class VersionResource extends CrudResource<BaseModels.Version.Model<BaseModels.Version.PlatformData>, ModelKey, VersionResource, 'creatorID'> {
  public domain = new Domain(this.fetch, { parentEndpoint: ENDPOINT });

  public async get<T extends Partial<BaseModels.Version.Model<BaseModels.Version.PlatformData>>>(id: string, fields: Fields): Promise<T>;

  public async get<P extends BaseModels.Version.PlatformData>(id: string): Promise<BaseModels.Version.Model<P>>;

  public async get<T extends BaseModels.Version.Model<any, any, string> = BaseModels.Version.Model<BaseModels.Version.PlatformData>>(
    id: string
  ): Promise<T>;

  public async get(id: string, fields?: Fields): Promise<BaseModels.Version.Model<any, any, string>> {
    return fields ? super._getByID(id, fields) : super._getByID(id);
  }

  public async create<P extends BaseModels.Version.PlatformData>(
    body: Omit<BaseModels.Version.Model<P>, ModelKey | 'creatorID'>
  ): Promise<BaseModels.Version.Model<P>>;

  public async create<P extends Omit<BaseModels.Version.Model<any, any, string>, ModelKey | 'creatorID'>>(
    body: P
  ): Promise<P & Pick<BaseModels.Version.Model<any, any, string>, ModelKey | 'creatorID'>>;

  public async create(
    body: Omit<BaseModels.Version.Model<any, any, string>, ModelKey | 'creatorID'>
  ): Promise<BaseModels.Version.Model<any, any, string>> {
    return super._post(body);
  }

  public async update<P extends BaseModels.Version.PlatformData>(
    id: string,
    body: Partial<BaseModels.Version.Model<P>>
  ): Promise<Partial<BaseModels.Version.Model<P>>>;

  public async update<P extends Partial<BaseModels.Version.Model<any, any, string>>>(id: string, body: P): Promise<P>;

  public async update(
    id: string,
    body: Partial<BaseModels.Version.Model<any, any, string>>
  ): Promise<Partial<BaseModels.Version.Model<any, any, string>>> {
    return super._patch(id, body);
  }

  public async delete(id: string): Promise<string> {
    return super._delete(id);
  }

  public async updatePlatformData<P extends Partial<BaseModels.Version.PlatformData>>(id: string, body: P): Promise<P> {
    const { data } = await this.fetch.patch<P>(`${this._getCRUDEndpoint(id)}/platform`, body);

    return data;
  }

  public async updatePlatformDataSettings<P extends Partial<BaseModels.Version.PlatformData['settings']>>(id: string, body: P): Promise<P> {
    const { data } = await this.fetch.patch<P>(`${this._getCRUDEndpoint(id)}/platform`, body, { path: 'settings' });

    return data;
  }

  public async updatePlatformDataPublishing<P extends Partial<BaseModels.Version.PlatformData['publishing']>>(id: string, body: P): Promise<P> {
    const { data } = await this.fetch.patch<P>(`${this._getCRUDEndpoint(id)}/platform`, body, { path: 'publishing' });

    return data;
  }

  public async getPrograms<T extends Partial<BaseModels.Program.Model>>(id: string, fields: Fields): Promise<T[]>;

  public async getPrograms<T extends BaseModels.Program.Model<any> = BaseModels.Program.Model>(id: string): Promise<T[]>;

  public async getPrograms(id: string, fields?: Fields): Promise<BaseModels.Program.Model[]> {
    const { data } = await this.fetch.get<BaseModels.Program.Model[]>(`${this._getCRUDEndpoint(id)}/programs${this._getFieldsQuery(fields)}`);

    return data;
  }

  public async getPrototypePrograms<T extends Partial<BaseModels.Program.Model>>(id: string, fields: Fields): Promise<T[]>;

  public async getPrototypePrograms<T extends BaseModels.Program.Model<any> = BaseModels.Program.Model>(id: string): Promise<T[]>;

  public async getPrototypePrograms(id: string, fields?: Fields): Promise<BaseModels.Program.Model[]> {
    const { data } = await this.fetch.get<BaseModels.Program.Model[]>(
      `${this._getCRUDEndpoint(id)}/prototype-programs${this._getFieldsQuery(fields)}`
    );

    return data;
  }

  public async getDiagrams<T extends Partial<BaseModels.Diagram.Model>>(id: string, fields: Fields): Promise<T[]>;

  public async getDiagrams<T extends BaseModels.Diagram.Model<any> = BaseModels.Diagram.Model>(id: string): Promise<T[]>;

  public async getDiagrams(id: string, fields?: Fields): Promise<BaseModels.Diagram.Model[]> {
    const { data } = await this.fetch.get<BaseModels.Diagram.Model[]>(`${this._getCRUDEndpoint(id)}/diagrams${this._getFieldsQuery(fields)}`);

    return data;
  }

  public async getDiagramsByIDs<T extends BaseModels.BaseDiagramNode = BaseModels.BaseDiagramNode>(
    versionId: string,
    diagramIds: string[]
  ): Promise<BaseModels.Diagram.Model<T>[]>;

  public async getDiagramsByIDs<T extends BaseModels.Diagram.Model<any> = BaseModels.Diagram.Model>(
    versionId: string,
    diagramIds: string[]
  ): Promise<T[]>;

  public async getDiagramsByIDs(versionId: string, diagramIds: string[]): Promise<BaseModels.Diagram.Model[]> {
    const { data } = await this.fetch.get<BaseModels.Diagram.Model[]>(
      `${this._getCRUDEndpoint(versionId)}/diagrams${this._getIDsQuery('diagramID', diagramIds)}`
    );

    return data;
  }

  public async export<
    P extends BaseModels.Project.Model<any, any> = BaseModels.Project.Model<AnyRecord, AnyRecord>,
    V extends BaseModels.Version.Model<any> = BaseModels.Version.Model<BaseModels.Version.PlatformData>,
    D extends BaseModels.Diagram.Model = BaseModels.Diagram.Model,
    PM extends BaseModels.Program.Model = BaseModels.Program.Model
  >(id: string, options: { programs: true }): Promise<{ project: P; version: V; diagrams: Record<string, D>; programs: Record<string, PM> }>;

  public async export<
    P extends BaseModels.Project.Model<any, any> = BaseModels.Project.Model<AnyRecord, AnyRecord>,
    V extends BaseModels.Version.Model<any> = BaseModels.Version.Model<BaseModels.Version.PlatformData>,
    D extends BaseModels.Diagram.Model = BaseModels.Diagram.Model
  >(id: string, options?: { programs?: boolean }): Promise<{ project: P; version: V; diagrams: Record<string, D> }>;

  public async export(
    id: string,
    options?: { programs?: boolean }
  ): Promise<{
    project: BaseModels.Project.Model<any, any>;
    version: BaseModels.Version.Model<any>;
    diagrams: Record<string, BaseModels.Diagram.Model>;
    programs?: Record<string, BaseModels.Program.Model>;
  }> {
    const { data } = await this.fetch.get<{
      project: BaseModels.Project.Model<any, any>;
      version: BaseModels.Version.Model<any>;
      diagrams: Record<string, BaseModels.Diagram.Model>;
      programs?: Record<string, BaseModels.Program.Model>;
    }>(`${this._getCRUDEndpoint(id)}/export${options?.programs ? '?programs=1' : ''}`);

    return data;
  }

  public async exportResponses(id: string): Promise<BaseModels.Version.DiagramResponse[]> {
    const { data } = await this.fetch.get<BaseModels.Version.DiagramResponse[]>(`${this._getCRUDEndpoint(id)}/export/responses`);

    return data;
  }

  public async import<P extends BaseModels.Project.Model<any, any> = BaseModels.Project.Model<AnyRecord, AnyRecord>>(
    workspaceID: string,
    data: { project: P; version: BaseModels.Version.Model<any>; diagrams: Record<string, BaseModels.Diagram.Model<any>> }
  ): Promise<P> {
    const { data: newProject } = await this.fetch.post<P>(`${this._getCRUDEndpoint()}/import`, { workspaceID, data });

    return newProject;
  }

  public async getPrototype<T extends BaseModels.Version.Prototype>(id: string, body: { isPublic?: boolean } = {}): Promise<T> {
    const query = body.isPublic ? `?isPublic=${body.isPublic}` : '';
    const { data } = await this.fetch.get<T>(`${this._getCRUDEndpoint(id)}/prototype${query}`);

    return data;
  }

  public async updatePrototype<P extends Partial<P>>(id: string, body: P): Promise<P> {
    const { data } = await this.fetch.patch<P>(`${this._getCRUDEndpoint(id)}/prototype`, body);

    return data;
  }

  public async updatePrototypeSettings<P extends Partial<BaseModels.Version.Prototype['settings']>>(id: string, body: P): Promise<P> {
    const { data } = await this.fetch.patch<P>(`${this._getCRUDEndpoint(id)}/prototype`, body, { path: 'settings' });

    return data;
  }

  public async checkPrototypeSharedLogin(id: string, body: { password: string }): Promise<{ versionID: string }> {
    const { data } = await this.fetch.put<{ versionID: string }>(`${this._getCRUDEndpoint(id)}/prototype/share/login`, body);

    return data;
  }

  public async getPrototypePlan(id: string): Promise<{ plan: string }> {
    const { data } = await this.fetch.get<{ plan: string }>(`${this._getCRUDEndpoint(id)}/prototype/plan`);

    return data;
  }

  public async reorderComponents(id: string, body: { fromID: string; toIndex: number }): Promise<BaseModels.Version.FolderItem> {
    const { data } = await this.fetch.patch<BaseModels.Version.FolderItem>(`${this._getCRUDEndpoint(id)}/components/reorder`, body);

    return data;
  }

  /**
   * @deprecated topics moved to domain
   */

  public async reorderTopics(id: string, body: { fromID: string; toIndex: number }): Promise<BaseModels.Version.FolderItem> {
    const { data } = await this.fetch.patch<BaseModels.Version.FolderItem>(`${this._getCRUDEndpoint(id)}/topics/reorder`, body);

    return data;
  }
}

export default VersionResource;
