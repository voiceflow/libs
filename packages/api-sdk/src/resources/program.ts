import { Models } from '@voiceflow/base-types';

import type Fetch from '@/fetch';

import { Fields } from './base';
import CrudResource from './crud';

const ENDPOINT = 'programs';

export const modelIDKey = 'id';
export type ModelIDKey = typeof modelIDKey;

class ProgramResource extends CrudResource<Models.Program, ModelIDKey, ProgramResource> {
  constructor(fetch: Fetch, { resourceEndpoint = ENDPOINT }: { resourceEndpoint?: string } = {}) {
    super({
      fetch,
      clazz: ProgramResource,
      endpoint: resourceEndpoint,
    });
  }

  public async get<T extends Partial<Models.Program>>(id: Models.ProgramID, fields: Fields): Promise<T>;

  public async get<T extends Models.BaseNode, C extends Models.BaseCommand>(id: Models.ProgramID): Promise<Models.Program<T, C>>;

  public async get<T extends Models.Program<any, any> = Models.Program>(id: Models.ProgramID): Promise<T>;

  public async get(id: Models.ProgramID, fields?: Fields): Promise<Models.Program<any, any>> {
    return fields ? super._getByID(id, fields) : super._getByID(id);
  }

  async create<T extends Models.BaseNode, C extends Models.BaseCommand>(body: Omit<Models.Program<T, C>, ModelIDKey>): Promise<Models.Program<T, C>>;

  async create<T extends Omit<Models.Program<any, any>, ModelIDKey>>(body: T): Promise<T & Pick<Models.Program<any, any>, ModelIDKey>>;

  public async create(body: Omit<Models.Program<any, any>, ModelIDKey>): Promise<Models.Program<any, any>> {
    return super._post(body);
  }

  public async update<T extends Models.BaseNode, C extends Models.BaseCommand>(
    id: Models.ProgramID,
    body: Omit<Models.Program<T, C>, ModelIDKey>
  ): Promise<Omit<Models.Program<T, C>, ModelIDKey>>;

  public async update<T extends Omit<Models.Program<any, any>, ModelIDKey>>(id: Models.ProgramID, body: T): Promise<T>;

  public async update(id: Models.ProgramID, body: Omit<Models.Program<any, any>, ModelIDKey>): Promise<Omit<Models.Program<any, any>, ModelIDKey>> {
    return super._put<Models.Program<any, any>>(id, body);
  }

  public async delete(id: Models.ProgramID): Promise<Models.ProgramID> {
    return super._delete(id);
  }
}

export default ProgramResource;
