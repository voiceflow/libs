import type Fetch from '@api-sdk/fetch';
import type { BaseModels } from '@voiceflow/base-types';

import CrudNestedResource from '../crudNested';

const ENDPOINT = 'prototype-programs';

export type ModelKey = 'diagramID';

class PrototypeProgramResource extends CrudNestedResource<
  string,
  BaseModels.Program.Model,
  ModelKey,
  PrototypeProgramResource
> {
  constructor(fetch: Fetch, { parentEndpoint }: { parentEndpoint: string }) {
    super({
      fetch,
      clazz: PrototypeProgramResource,
      endpoint: ENDPOINT,
      clazzOptions: { parentEndpoint },
    });
  }

  public async get(versionID: string, diagramID: string): Promise<BaseModels.Program.Model> {
    return this._getByID<BaseModels.Program.Model>(versionID, diagramID);
  }
}

export default PrototypeProgramResource;
