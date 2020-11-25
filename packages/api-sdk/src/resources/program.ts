import type Fetch from '@/fetch';
import { Command, Node, Program, ProgramID, SProgram } from '@/models';

import CrudResource from './crud';

const ENDPOINT = 'programs';

export const modelIDKey = 'id';
export type ModelIDKey = typeof modelIDKey;

class ProgramResource extends CrudResource<typeof SProgram['schema'], ModelIDKey, ProgramResource> {
  constructor(fetch: Fetch, { resourceEndpoint = ENDPOINT }: { resourceEndpoint?: string } = {}) {
    super({
      fetch,
      clazz: ProgramResource,
      schema: SProgram.schema,
      modelIDKey,
      resourceEndpoint,
    });
  }

  public async get<T extends Partial<Program>>(id: ProgramID, fields: string[]): Promise<T>;

  public async get<T extends Node, C extends Command>(id: ProgramID): Promise<Program<Node, C>>;

  public async get(id: ProgramID, fields?: string[]) {
    return fields ? super._getByID<Program>(id, fields) : super._getByID<Program>(id);
  }

  public async create<T extends Node, C extends Command>(body: Omit<Program<T, C>, ModelIDKey>): Promise<Program<T, C>> {
    return super._post<Program<T, C>>(body);
  }

  public async update<T extends Node, C extends Command>(
    id: ProgramID,
    body: Omit<Program<T, C>, ModelIDKey>
  ): Promise<Omit<Program<T, C>, ModelIDKey>> {
    return super._put<Program<T, C>>(id, body);
  }

  public async delete(id: ProgramID): Promise<ProgramID> {
    return super._delete(id);
  }
}

export default ProgramResource;
