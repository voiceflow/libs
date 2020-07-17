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

  public get(id: ProgramID): Promise<Program> {
    return super._getByID<Program>(id);
  }

  public create(body: Omit<Program, ModelIDKey>): Promise<Program> {
    return super._post<Program>(body);
  }

  public update(id: ProgramID, body: Omit<Program, ModelIDKey>): Promise<Omit<Program, ModelIDKey>> {
    return super._put<Program>(id, body);
  }

  public delete(id: ProgramID): Promise<ProgramID> {
    return super._delete(id);
  }
}

export default ProgramResource;
