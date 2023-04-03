import type Fetch from '@api-sdk/fetch';
import { BaseModels } from '@voiceflow/base-types';
import { AnyRecord } from '@voiceflow/common';

import CrudResource from './crud';

const ENDPOINT = 'templates';

export const modelIDKey = '_id';
export type ModelIDKey = typeof modelIDKey;

export default class TemplateResource extends CrudResource<any, ModelIDKey, TemplateResource> {
  constructor(fetch: Fetch, { resourceEndpoint = ENDPOINT }: { resourceEndpoint?: string } = {}) {
    super({
      fetch,
      clazz: TemplateResource,
      endpoint: resourceEndpoint,
    });
  }

  public async getTemplateProject<P extends AnyRecord, M extends AnyRecord>(projectID: string): Promise<BaseModels.Project.Model<P, M>> {
    const { data } = await this.fetch.get<BaseModels.Project.Model<any, any>>(`${this.endpoint}/project/${projectID}`);

    return data;
  }
}
