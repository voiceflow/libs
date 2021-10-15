import type Fetch from '@/fetch';
import { APIKey } from '@voiceflow/base-types';

import CrudResource from './crud';

const ENDPOINT = 'api-keys';

export const modelIDKey = '_id';
export type ModelIDKey = typeof modelIDKey;

class APIKeyResource extends CrudResource<APIKey, ModelIDKey, APIKeyResource> {
  constructor(fetch: Fetch, { resourceEndpoint = ENDPOINT }: { resourceEndpoint?: string } = {}) {
    super({
      fetch,
      clazz: APIKeyResource,
      endpoint: resourceEndpoint,
    });
  }

  public async get(id: string): Promise<APIKey> {
    return super._getByID<APIKey>(id);
  }

  public async create(workspaceID: string, body: Partial<APIKey>): Promise<APIKey & { APIKey: string }> {
    return super._post({ ...body, workspaceID } as any);
  }

  public async update(id: string, body: Pick<APIKey, 'name' | 'permissions' | 'scopes' | 'data'>): Promise<Partial<APIKey>> {
    return super._put(id, body as APIKey);
  }

  public async delete(id: string): Promise<string> {
    return super._delete(id);
  }
}

export default APIKeyResource;
