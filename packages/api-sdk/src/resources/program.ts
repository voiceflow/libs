import type Fetch from '@/fetch';
import { BaseCommand, BaseNode, Program, ProgramID, SProgram } from '@/models';

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

  public async get<T extends BaseNode, C extends BaseCommand>(id: ProgramID): Promise<Program<T, C>>;

  public async get(id: ProgramID, fields?: string[]) {
    return fields ? super._getByID<Program>(id, fields) : super._getByID<Program>(id);
  }

  public async create<T extends BaseNode, C extends BaseCommand>(body: Omit<Program<T, C>, ModelIDKey>): Promise<Program<T, C>> {
    return super._post<Program<T, C>>(body);
  }

  public async update<T extends BaseNode, C extends BaseCommand>(
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
