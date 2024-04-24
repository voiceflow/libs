import type Fetch from '@api-sdk/fetch';
import type { BaseModels } from '@voiceflow/base-types';

import BaseResource from './base';

const ENDPOINT = 'projects';

class ProjectSecretResource extends BaseResource<ProjectSecretResource> {
  constructor(fetch: Fetch) {
    super({ fetch, clazz: ProjectSecretResource, endpoint: ENDPOINT });
  }

  public async findByProjectID(projectID: string, tag: number): Promise<BaseModels.ProjectSecret.Model> {
    const { data } = await this.fetch.get<BaseModels.ProjectSecret.Model>(
      `${this.endpoint}/${projectID}/secret/${tag}`
    );

    return data;
  }

  public async findManyByProjectID(projectID: string, tags: number[]) {
    const tagsQuery = new URLSearchParams(
      tags.map((tagValue) => ['tag', String(tagValue)] as [string, string])
    ).toString();

    const { data } = await this.fetch.get<BaseModels.ProjectSecret.Model[]>(
      `${this.endpoint}/${projectID}/secret?${tagsQuery}`
    );

    return data;
  }

  public async findByLookup(lookup: string, tag: number): Promise<BaseModels.ProjectSecret.Model[]> {
    const tagsQuery = new URLSearchParams([
      ['lookup', String(lookup)],
      ['tag', String(tag)],
    ]);

    const { data } = await this.fetch.get<BaseModels.ProjectSecret.Model[]>(`${this.endpoint}/secret?${tagsQuery}`);

    return data;
  }

  public async updateManySecrets(
    projectID: string,
    secrets: Pick<BaseModels.ProjectSecret.Model, 'secret' | 'tag' | 'lookup'>[]
  ) {
    await this.fetch.post(`${this.endpoint}/${projectID}/secret`, { secrets });
  }

  public async create(
    projectID: string,
    tag: number,
    secret: string,
    lookup?: string
  ): Promise<BaseModels.ProjectSecret.Model> {
    const { data } = await this.fetch.post<BaseModels.ProjectSecret.Model>(
      `${this.endpoint}/${projectID}/secret/${tag}`,
      { secret, lookup }
    );

    return data;
  }

  public async delete(projectID: string, tag: number): Promise<void> {
    await this.fetch.delete<void>(`${this.endpoint}/${projectID}/secret/${tag}`);
  }
}

export default ProjectSecretResource;
