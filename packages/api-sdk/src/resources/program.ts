import { type default as Fetch } from '@api-sdk/fetch';
import { BaseModels } from '@voiceflow/base-types';

import { Fields } from './base';
import CrudResource from './crud';

const ENDPOINT = 'programs';

export const modelIDKey = 'id';
export type ModelIDKey = typeof modelIDKey;

class ProgramResource extends CrudResource<BaseModels.Program.Model, ModelIDKey, ProgramResource> {
  constructor(fetch: Fetch, { resourceEndpoint = ENDPOINT }: { resourceEndpoint?: string } = {}) {
    super({
      fetch,
      clazz: ProgramResource,
      endpoint: resourceEndpoint,
    });
  }

  public async get<T extends Partial<BaseModels.Program.Model>>(id: string, fields: Fields): Promise<T>;

  public async get<T extends BaseModels.BaseNode, C extends BaseModels.BaseCommand>(id: string): Promise<BaseModels.Program.Model<T, C>>;

  public async get<T extends BaseModels.Program.Model<any, any> = BaseModels.Program.Model>(id: string): Promise<T>;

  public async get(id: string, fields?: Fields): Promise<BaseModels.Program.Model<any, any>> {
    return fields ? super._getByID(id, fields) : super._getByID(id);
  }

  async create<T extends BaseModels.BaseNode, C extends BaseModels.BaseCommand>(
    body: Omit<BaseModels.Program.Model<T, C>, ModelIDKey>
  ): Promise<BaseModels.Program.Model<T, C>>;

  async create<T extends Omit<BaseModels.Program.Model<any, any>, ModelIDKey>>(
    body: T
  ): Promise<T & Pick<BaseModels.Program.Model<any, any>, ModelIDKey>>;

  public async create(body: Omit<BaseModels.Program.Model<any, any>, ModelIDKey>): Promise<BaseModels.Program.Model<any, any>> {
    return super._post(body);
  }

  public async createMany(body: Omit<BaseModels.Program.Model<any, any>, ModelIDKey>[]): Promise<BaseModels.Program.Model<any, any>[]> {
    const { data } = await this.fetch.post<BaseModels.Program.Model<any, any>[]>(`${super._getCRUDEndpoint()}/batch`, { programs: body });
    return data;
  }

  public async update<T extends BaseModels.BaseNode, C extends BaseModels.BaseCommand>(
    id: string,
    body: Omit<BaseModels.Program.Model<T, C>, ModelIDKey>
  ): Promise<Omit<BaseModels.Program.Model<T, C>, ModelIDKey>>;

  public async update<T extends Omit<BaseModels.Program.Model<any, any>, ModelIDKey>>(id: string, body: T): Promise<T>;

  public async update(
    id: string,
    body: Omit<BaseModels.Program.Model<any, any>, ModelIDKey>
  ): Promise<Omit<BaseModels.Program.Model<any, any>, ModelIDKey>> {
    return super._put<BaseModels.Program.Model<any, any>>(id, body);
  }

  public async delete(id: string): Promise<string> {
    return super._delete(id);
  }
}

export default ProgramResource;
