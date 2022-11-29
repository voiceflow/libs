import type Fetch from '@api-sdk/fetch';
import { BaseModels } from '@voiceflow/base-types';

import BaseResource from './base';

const ENDPOINT = 'projects';

class ProjectSecretResource extends BaseResource<ProjectSecretResource> {
  constructor(fetch: Fetch) {
    super({ fetch, clazz: ProjectSecretResource, endpoint: ENDPOINT });
  }

  public async read(projectID: string, tag: number): Promise<string> {
    const { data } = await this.fetch.get<string>(`${this.endpoint}/${projectID}/secret/${tag}`);

    return data;
  }

  public async find(lookup: string, tag: number): Promise<BaseModels.ProjectSecret.Model[]> {
    const { data } = await this.fetch.get<BaseModels.ProjectSecret.Model[]>(
      `${this.endpoint}/secret?lookup=${encodeURIComponent(lookup)}&tag=${tag}`
    );

    return data;
  }

  public async create(projectID: string, tag: number, secret: string, lookup?: string): Promise<BaseModels.ProjectSecret.Model> {
    const { data } = await this.fetch.post<BaseModels.ProjectSecret.Model>(`${this.endpoint}/${projectID}/secret/${tag}`, { secret, lookup });

    return data;
  }

  public async delete(projectID: string, tag: number): Promise<void> {
    await this.fetch.delete<void>(`${this.endpoint}/${projectID}/secret/${tag}`);
  }
}

export default ProjectSecretResource;
