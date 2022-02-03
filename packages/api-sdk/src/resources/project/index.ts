import { AnyRecord, BaseModels } from '@voiceflow/base-types';

import type Fetch from '@/fetch';

import { Fields } from '../base';
import CrudResource from '../crud';
import { ENDPOINT } from './constants';
import MemberResource from './member';

export const modelIDKey = '_id';
export type ModelIDKey = typeof modelIDKey;

class ProjectResource extends CrudResource<BaseModels.Project.Model<AnyRecord, AnyRecord>, ModelIDKey, ProjectResource, 'creatorID'> {
  public member: MemberResource;

  constructor(fetch: Fetch) {
    super({
      fetch,
      clazz: ProjectResource,
      endpoint: ENDPOINT,
    });

    this.member = new MemberResource(fetch);
  }

  public async list<P extends Partial<BaseModels.Project.Model<AnyRecord, AnyRecord>>>(workspaceID: string, fields: Fields): Promise<P[]>;

  public async list<P extends AnyRecord, M extends AnyRecord>(workspaceID: string): Promise<BaseModels.Project.Model<P, M>[]>;

  public async list<P extends BaseModels.Project.Model<any, any> = BaseModels.Project.Model<AnyRecord, AnyRecord>>(workspaceID: string): Promise<P[]>;

  public async list(
    workspaceID: string,
    fields?: Fields
  ): Promise<BaseModels.Project.Model<any, any>[] | Partial<BaseModels.Project.Model<any, any>>[]> {
    const { data } = await this.fetch.get<BaseModels.Project.Model<any, any>[] | Partial<BaseModels.Project.Model<any, any>>[]>(
      `workspaces/${workspaceID}/projects${this._getFieldsQuery(fields)}`
    );

    return data;
  }

  public async get<P extends Partial<BaseModels.Project.Model<AnyRecord, AnyRecord>>>(id: string, fields: string[]): Promise<P>;

  public async get<P extends AnyRecord, M extends AnyRecord>(id: string): Promise<BaseModels.Project.Model<P, M>>;

  public async get<P extends BaseModels.Project.Model<any, any> = BaseModels.Project.Model<AnyRecord, AnyRecord>>(id: string): Promise<P>;

  public async get(id: string, fields?: string[]): Promise<BaseModels.Project.Model<any, any> | Partial<BaseModels.Project.Model<any, any>>> {
    return fields ? super._getByID(id, fields) : super._getByID(id);
  }

  public async create<P extends AnyRecord, M extends AnyRecord>(
    body: Omit<BaseModels.Project.Model<P, M>, ModelIDKey | 'creatorID'>
  ): Promise<BaseModels.Project.Model<P, M>>;

  public async create<P extends Omit<BaseModels.Project.Model<any, any>, ModelIDKey | 'creatorID'>>(
    body: P
  ): Promise<P & Pick<BaseModels.Project.Model<any, any>, ModelIDKey | 'creatorID'>>;

  public async create(body: Omit<BaseModels.Project.Model<any, any>, ModelIDKey | 'creatorID'>): Promise<BaseModels.Project.Model<any, any>> {
    return super._post(body);
  }

  public async update<P extends AnyRecord, M extends AnyRecord>(
    id: string,
    body: Partial<BaseModels.Project.Model<P, M>>
  ): Promise<Partial<BaseModels.Project.Model<P, M>>>;

  public async update<P extends Partial<BaseModels.Project.Model<any, any>>>(id: string, body: P): Promise<P>;

  public async update(id: string, body: Partial<BaseModels.Project.Model<any, any>>): Promise<Partial<BaseModels.Project.Model<any, any>>> {
    return super._patch(id, body);
  }

  public async delete(id: string): Promise<string> {
    return super._delete(id);
  }

  public async updatePlatformData<P extends Partial<AnyRecord>>(id: string, body: P): Promise<P> {
    const { data } = await this.fetch.patch<P>(`${this._getCRUDEndpoint(id)}/platform`, body);

    return data;
  }

  public async getVersions<P extends Partial<BaseModels.Version.Model<BaseModels.Version.PlatformData>>>(id: string, fields: string[]): Promise<P[]>;

  public async getVersions<P extends BaseModels.Version.Model<any> = BaseModels.Version.Model<BaseModels.Version.PlatformData>>(
    id: string
  ): Promise<P[]>;

  public async getVersions<P extends BaseModels.Version.PlatformData>(id: string): Promise<BaseModels.Version.Model<P>[]>;

  public async getVersions(id: string, fields?: string[]): Promise<BaseModels.Version.Model<any>[]> {
    const { data } = await this.fetch.get<BaseModels.Version.Model<any>[]>(`${this._getCRUDEndpoint(id)}/versions${this._getFieldsQuery(fields)}`);

    return data;
  }

  public async getVersionsV2<P extends BaseModels.Version.PlatformData>(
    id: string,
    options?: { offset?: number; limit?: number }
  ): Promise<BaseModels.Version.Model<P>[]>;

  public async getVersionsV2(id: string, options: { offset?: number; limit?: number } = {}): Promise<BaseModels.Version.Model<any>[]> {
    const { offset = 0, limit = 10 } = options;
    const { data } = await this.fetch.get<BaseModels.Version.Model<any>[]>(
      `${this._getCRUDEndpoint(id)}/projectVersions?offset=${offset}&limit=${limit}`
    );

    return data;
  }

  public async getPrototype<P extends BaseModels.Project.Prototype>(id: string): Promise<P> {
    const { data } = await this.fetch.get<P>(`${this._getCRUDEndpoint(id)}/prototype`);

    return data;
  }
}

export default ProjectResource;
