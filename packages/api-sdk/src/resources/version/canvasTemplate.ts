import Fetch from '@api-sdk/fetch';
import { BaseModels } from '@voiceflow/base-types';

import CrudNestedResource from '../crudNested';

const ENDPOINT = 'canvasTemplate';

export type ModelKey = 'id';

class CanvasTemplateResource extends CrudNestedResource<string, BaseModels.Version.CanvasTemplate, ModelKey, CanvasTemplateResource> {
  constructor(fetch: Fetch, { parentEndpoint }: { parentEndpoint: string }) {
    super({
      fetch,
      clazz: CanvasTemplateResource,
      endpoint: ENDPOINT,
      clazzOptions: { parentEndpoint },
    });
  }

  public async list(versionID: string): Promise<BaseModels.Version.CanvasTemplate[]> {
    return this._get<BaseModels.Version.CanvasTemplate>(versionID);
  }

  public async get(versionID: string, id: string): Promise<BaseModels.Version.CanvasTemplate> {
    return this._getByID<BaseModels.Version.CanvasTemplate>(versionID, id);
  }

  public async create(versionID: string, body: BaseModels.Version.CanvasTemplate): Promise<BaseModels.Version.CanvasTemplate> {
    return this._post<BaseModels.Version.CanvasTemplate>(versionID, body);
  }

  public async update<T extends Partial<Omit<BaseModels.Version.CanvasTemplate, ModelKey | 'rootDiagramID'>>>(
    versionID: string,
    id: string,
    body: T
  ): Promise<T> {
    return this._patch<T>(versionID, id, body);
  }

  public async delete(versionID: string, id: string): Promise<string> {
    return this._delete(versionID, id);
  }
}

export default CanvasTemplateResource;
