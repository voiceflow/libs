import Fetch from '@api-sdk/fetch';
import { BaseModels } from '@voiceflow/base-types';

import CrudNestedResource from '../crudNested';

const ENDPOINT = 'diagrams';

export type ModelKey = 'diagramID';

class DiagramResource extends CrudNestedResource<string, BaseModels.Diagram.Model, ModelKey, DiagramResource> {
  constructor(fetch: Fetch, { parentEndpoint }: { parentEndpoint: string }) {
    super({
      fetch,
      clazz: DiagramResource,
      endpoint: ENDPOINT,
      clazzOptions: { parentEndpoint },
    });
  }

  public async get(versionID: string, diagramID: string): Promise<BaseModels.Diagram.Model> {
    return this._getByID<BaseModels.Diagram.Model>(versionID, diagramID);
  }
}

export default DiagramResource;
