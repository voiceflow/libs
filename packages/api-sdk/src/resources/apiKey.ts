import type Fetch from '@api-sdk/fetch';
import { BaseModels } from '@voiceflow/base-types';

import CrudResource from './crud';

const ENDPOINT = 'api-keys';

export const modelIDKey = '_id';
export type ModelIDKey = typeof modelIDKey;

class APIKeyResource extends CrudResource<BaseModels.ApiKey.Model, ModelIDKey, APIKeyResource> {
  constructor(fetch: Fetch, { resourceEndpoint = ENDPOINT }: { resourceEndpoint?: string } = {}) {
    super({
      fetch,
      clazz: APIKeyResource,
      endpoint: resourceEndpoint,
    });
  }

  public async get(id: string): Promise<BaseModels.ApiKey.Model> {
    return super._getByID<BaseModels.ApiKey.Model>(id);
  }

  public async create(workspaceID: string, body: Partial<BaseModels.ApiKey.Model>): Promise<BaseModels.ApiKey.Model & { APIKey: string }> {
    return super._post({ ...body, workspaceID } as any);
  }

  public async update(
    id: string,
    body: Pick<BaseModels.ApiKey.Model, 'name' | 'permissions' | 'scopes' | 'data'>
  ): Promise<Partial<BaseModels.ApiKey.Model>> {
    return super._put(id, body as BaseModels.ApiKey.Model);
  }

  public async delete(id: string): Promise<string> {
    return super._delete(id);
  }

  public async getSecondary(id: string): Promise<BaseModels.ApiKey.Model> {
    const { data } = await this.fetch.get<BaseModels.ApiKey.Model>(`${this._getCRUDEndpoint(id)}/secondary`);

    return data;
  }

  public async createSecondary(id: string) {
    const { data } = await this.fetch.post(`${this._getCRUDEndpoint(id)}/secondary`);

    return data;
  }

  public async promoteSecondary(id: string) {
    const { data } = await this.fetch.patch(`${this._getCRUDEndpoint(id)}/secondary`, {});
    return data;
  }

  public async deleteSecondary(id: string): Promise<string> {
    await this.fetch.delete(`${this._getCRUDEndpoint(id)}/secondary`);

    return id;
  }
}

export default APIKeyResource;
