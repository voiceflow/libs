import type Fetch from '@/fetch';
import { Program, ProgramID, SProgram } from '@/models';

import CrudResource from './crud';

const ENDPOINT = 'programs';

export const modelIDKey = 'id';
export type ModelIDKey = typeof modelIDKey;

class ProgramResource extends CrudResource<typeof SProgram['schema'], ModelIDKey> {
  constructor(fetch: Fetch) {
    super({
      fetch,
      schema: SProgram.schema,
      modelIDKey,
      resourceEndpoint: ENDPOINT,
    });
  }

  public async get<T extends Partial<Program>>(id: ProgramID, fields: string[]): Promise<T>;

  public async get(id: ProgramID): Promise<Program>;

  public async get(id: ProgramID, fields?: string[]) {
    return fields ? super._getByID<Program>(id, fields) : super._getByID<Program>(id);
  }

  public async create(body: Omit<Program, ModelIDKey>): Promise<Program> {
    return super._post<Program>(body);
  }

  public async update(id: ProgramID, body: Omit<Program, ModelIDKey>): Promise<Omit<Program, ModelIDKey>> {
    return super._put<Program>(id, body);
  }

  public async delete(id: ProgramID): Promise<ProgramID> {
    return super._delete(id);
  }
}

export default ProgramResource;
