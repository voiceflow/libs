import type Fetch from '@/fetch';
import { Node, Program, ProgramID, SProgram } from '@/models';

import CrudResource from './crud';

const ENDPOINT = 'programs';

export const modelIDKey = 'id';
export type ModelIDKey = typeof modelIDKey;

class ProgramResource extends CrudResource<typeof SProgram['schema'], ModelIDKey, ProgramResource> {
  constructor(fetch: Fetch) {
    super({
      fetch,
      clazz: ProgramResource,
      schema: SProgram.schema,
      modelIDKey,
      resourceEndpoint: ENDPOINT,
    });
  }

  public async get<T extends Partial<Program>>(id: ProgramID, fields: string[]): Promise<T>;

  public async get<T extends Node>(id: ProgramID): Promise<Program<Node>>;

  public async get(id: ProgramID, fields?: string[]) {
    return fields ? super._getByID<Program>(id, fields) : super._getByID<Program>(id);
  }

  public async create<T extends Node>(body: Omit<Program<T>, ModelIDKey>): Promise<Program<T>> {
    return super._post<Program<T>>(body);
  }

  public async update<T extends Node>(id: ProgramID, body: Omit<Program<T>, ModelIDKey>): Promise<Omit<Program<T>, ModelIDKey>> {
    return super._put<Program<T>>(id, body);
  }

  public async delete(id: ProgramID): Promise<ProgramID> {
    return super._delete(id);
  }
}

export default ProgramResource;
