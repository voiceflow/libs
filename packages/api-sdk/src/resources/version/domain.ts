import Fetch from '@api-sdk/fetch';
import { BaseModels } from '@voiceflow/base-types';

import CrudNestedResource from '../crudNested';

const ENDPOINT = 'domains';

export type ModelKey = 'id';

class DomainResource extends CrudNestedResource<string, BaseModels.Version.Domain, ModelKey, DomainResource, 'topicIDs' | 'rootDiagramID'> {
  constructor(fetch: Fetch, { parentEndpoint }: { parentEndpoint: string }) {
    super({
      fetch,
      clazz: DomainResource,
      endpoint: ENDPOINT,
      clazzOptions: { parentEndpoint },
    });
  }

  public async list(versionID: string): Promise<BaseModels.Version.Domain[]> {
    return this._get<BaseModels.Version.Domain>(versionID);
  }

  public async get(versionID: string, id: string): Promise<BaseModels.Version.Domain> {
    return this._getByID<BaseModels.Version.Domain>(versionID, id);
  }

  public async create(
    versionID: string,
    body: Omit<BaseModels.Version.Domain, ModelKey | 'topicIDs' | 'rootDiagramID'>
  ): Promise<BaseModels.Version.Domain> {
    return this._post<BaseModels.Version.Domain>(versionID, body);
  }

  public async update<T extends Partial<Omit<BaseModels.Version.Domain, ModelKey | 'topicIDs' | 'rootDiagramID'>>>(
    versionID: string,
    id: string,
    body: T
  ): Promise<T> {
    return this._patch<T>(versionID, id, body);
  }

  public async delete(projectID: string, id: string): Promise<string> {
    return this._delete(projectID, id);
  }

  public async reorderTopics(projectID: string, id: string, body: { fromID: string; toIndex: number }): Promise<string[]> {
    const { data } = await this.fetch.patch<string[]>(`${this._getCRUDEndpoint(projectID, id)}/reorder-topics`, body);

    return data;
  }
}

export default DomainResource;
