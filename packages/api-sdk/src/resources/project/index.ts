import type Fetch from '@api-sdk/fetch';
import type { BaseModels } from '@voiceflow/base-types';
import type { AnyRecord } from '@voiceflow/common';

import type { Fields } from '../base';
import CrudResource from '../crud';
import { ENDPOINT } from './constants';
import type { UpdateMetadataBody } from './interface';
import MemberResource from './member';

export const modelIDKey = '_id';
export type ModelIDKey = typeof modelIDKey;

class ProjectResource extends CrudResource<
  BaseModels.Project.Model<AnyRecord, AnyRecord>,
  ModelIDKey,
  ProjectResource,
  'creatorID'
> {
  public member: MemberResource;

  constructor(fetch: Fetch) {
    super({
      fetch,
      clazz: ProjectResource,
      endpoint: ENDPOINT,
    });

    this.member = new MemberResource(fetch);
  }

  public async list<P extends Partial<BaseModels.Project.Model<AnyRecord, AnyRecord>>>(
    workspaceID: string,
    fields: Fields
  ): Promise<P[]>;

  public async list<P extends AnyRecord, M extends AnyRecord>(
    workspaceID: string
  ): Promise<BaseModels.Project.Model<P, M>[]>;

  public async list<P extends BaseModels.Project.Model<any, any> = BaseModels.Project.Model<AnyRecord, AnyRecord>>(
    workspaceID: string
  ): Promise<P[]>;

  public async list(
    workspaceID: string,
    fields?: Fields
  ): Promise<BaseModels.Project.Model<any, any>[] | Partial<BaseModels.Project.Model<any, any>>[]> {
    const { data } = await this.fetch.get<
      BaseModels.Project.Model<any, any>[] | Partial<BaseModels.Project.Model<any, any>>[]
    >(`workspaces/${workspaceID}/projects${this._getFieldsQuery(fields)}`);

    return data;
  }

  public async get<P extends Partial<BaseModels.Project.Model<AnyRecord, AnyRecord>>>(
    id: string,
    fields: Fields
  ): Promise<P>;

  public async get<P extends AnyRecord, M extends AnyRecord>(id: string): Promise<BaseModels.Project.Model<P, M>>;

  public async get<P extends BaseModels.Project.Model<any, any> = BaseModels.Project.Model<AnyRecord, AnyRecord>>(
    id: string
  ): Promise<P>;

  public async get(
    id: string,
    fields?: Fields
  ): Promise<BaseModels.Project.Model<any, any> | Partial<BaseModels.Project.Model<any, any>>> {
    return fields ? super._getByID(id, fields) : super._getByID(id);
  }

  public async create<P extends AnyRecord, M extends AnyRecord>(
    body: Omit<BaseModels.Project.Model<P, M>, ModelIDKey | 'creatorID'>
  ): Promise<BaseModels.Project.Model<P, M>>;

  public async create<P extends Omit<BaseModels.Project.Model<any, any>, ModelIDKey | 'creatorID'>>(
    body: P
  ): Promise<P & Pick<BaseModels.Project.Model<any, any>, ModelIDKey | 'creatorID'>>;

  public async create(
    body: Omit<BaseModels.Project.Model<any, any>, ModelIDKey | 'creatorID'>
  ): Promise<BaseModels.Project.Model<any, any>> {
    return super._post(body);
  }

  public async update<P extends AnyRecord, M extends AnyRecord>(
    id: string,
    body: Partial<BaseModels.Project.Model<P, M>>
  ): Promise<Partial<BaseModels.Project.Model<P, M>>>;

  public async update<P extends Partial<BaseModels.Project.Model<any, any>>>(id: string, body: P): Promise<P>;

  public async update(
    id: string,
    body: Partial<BaseModels.Project.Model<any, any>>
  ): Promise<Partial<BaseModels.Project.Model<any, any>>> {
    return super._patch(id, body);
  }

  public async delete(id: string): Promise<string> {
    return super._delete(id);
  }

  public async updatePlatformData<P extends Partial<AnyRecord>>(id: string, body: P): Promise<P> {
    const { data } = await this.fetch.patch<P>(`${this._getCRUDEndpoint(id)}/platform`, body);

    return data;
  }

  public async getVersions<P extends Partial<BaseModels.Version.Model<BaseModels.Version.PlatformData>>>(
    id: string,
    fields: Fields
  ): Promise<P[]>;

  public async getVersions<
    P extends BaseModels.Version.Model<any> = BaseModels.Version.Model<BaseModels.Version.PlatformData>,
  >(id: string): Promise<P[]>;

  public async getVersions<P extends BaseModels.Version.PlatformData>(
    id: string
  ): Promise<BaseModels.Version.Model<P>[]>;

  public async getVersions(id: string, fields?: Fields): Promise<BaseModels.Version.Model<any>[]> {
    const { data } = await this.fetch.get<BaseModels.Version.Model<any>[]>(
      `${this._getCRUDEndpoint(id)}/versions${this._getFieldsQuery(fields)}`
    );

    return data;
  }

  public async getVersionsV2<P extends BaseModels.Version.PlatformData>(
    id: string,
    options?: { offset?: number; limit?: number }
  ): Promise<BaseModels.Version.Model<P>[]>;

  public async getVersionsV2(
    id: string,
    options: { offset?: number; limit?: number } = {}
  ): Promise<BaseModels.Version.Model<any>[]> {
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

  public async updateDevTrainingReceipt<P extends BaseModels.Project.Prototype>(
    id: string,
    trainingReceipt: Pick<Required<BaseModels.Project.Prototype>, 'lastTrainedTime' | 'trainedModel'>
  ): Promise<P> {
    const { data } = await this.fetch.patch<P>(
      `${this._getCRUDEndpoint(id)}/prototype/training-receipt`,
      trainingReceipt
    );

    return data;
  }

  public async updateNLUMetadata<P extends BaseModels.Project.Prototype>(
    id: string,
    nluMetadata: UpdateMetadataBody
  ): Promise<P> {
    const { data } = await this.fetch.patch<P>(`${this._getCRUDEndpoint(id)}/prototype/nlp`, nluMetadata);

    return data;
  }

  public async getCreator<
    P extends BaseModels.Project.Model<any, any> = BaseModels.Project.Model<AnyRecord, AnyRecord>,
    V extends BaseModels.Version.Model<any, any, string> = BaseModels.Version.Model<BaseModels.Version.PlatformData>,
    D extends BaseModels.Diagram.Model<any> = BaseModels.Diagram.Model,
    VS extends BaseModels.VariableState.Model = BaseModels.VariableState.Model,
  >(id: string, versionID: string): Promise<{ project: P; version: V; diagrams: D[]; variableStates: VS[] }> {
    const { data } = await this.fetch.get<{ project: P; version: V; diagrams: D[]; variableStates: VS[] }>(
      `${this._getCRUDEndpoint(id)}/creator/${versionID}`
    );

    return data;
  }

  public async getAPIKeys(id: string): Promise<BaseModels.ApiKey.Model[]> {
    const { data } = await this.fetch.get<BaseModels.ApiKey.Model[]>(`${this._getCRUDEndpoint(id)}/api-keys`);

    return data;
  }
}

export default ProjectResource;
