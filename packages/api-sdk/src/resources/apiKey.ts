import { Models } from '@voiceflow/base-types';

import type Fetch from '@/fetch';

import CrudResource from './crud';

const ENDPOINT = 'api-keys';

export const modelIDKey = '_id';
export type ModelIDKey = typeof modelIDKey;

class APIKeyResource extends CrudResource<Models.APIKey, ModelIDKey, APIKeyResource> {
  constructor(fetch: Fetch, { resourceEndpoint = ENDPOINT }: { resourceEndpoint?: string } = {}) {
    super({
      fetch,
      clazz: APIKeyResource,
      endpoint: resourceEndpoint,
    });
  }

  public async get(id: string): Promise<Models.APIKey> {
    return super._getByID<Models.APIKey>(id);
  }

  public async create(workspaceID: string, body: Partial<Models.APIKey>): Promise<Models.APIKey & { APIKey: string }> {
    return super._post({ ...body, workspaceID } as any);
  }

  public async update(id: string, body: Pick<Models.APIKey, 'name' | 'permissions' | 'scopes' | 'data'>): Promise<Partial<Models.APIKey>> {
    return super._put(id, body as Models.APIKey);
  }

  public async delete(id: string): Promise<string> {
    return super._delete(id);
  }
}

export default APIKeyResource;
