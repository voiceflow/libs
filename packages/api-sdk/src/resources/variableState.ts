import Fetch from '@api-sdk/fetch';
import { BaseModels } from '@voiceflow/base-types';

import { Fields } from './base';
import CrudResource from './crud';

export const ENDPOINT = 'variable-states';

export type ModelKey = '_id';

class VariableStateResource extends CrudResource<BaseModels.VariableState.Model, ModelKey, VariableStateResource, 'projectID' | 'name'> {
  constructor(fetch: Fetch) {
    super({
      fetch,
      clazz: VariableStateResource,
      endpoint: ENDPOINT,
    });
  }

  public async get<T extends Partial<BaseModels.VariableState.Model>>(id: string, fields?: Fields): Promise<T>;

  public async get<T extends BaseModels.VariableState.Model = BaseModels.VariableState.Model>(id: string): Promise<T>;

  public async get(id: string, fields?: Fields): Promise<BaseModels.VariableState.Model> {
    return fields ? super._getByID(id, fields) : super._getByID(id);
  }
}

export default VariableStateResource;
