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

  public async get<T extends Program<any, any> = Program>(id: ProgramID): Promise<T>;

  public async get(id: ProgramID, fields?: string[]): Promise<Program<any, any>> {
    return fields ? super._getByID(id, fields) : super._getByID(id);
  }

  async create<T extends BaseNode, C extends BaseCommand>(body: Omit<Program<T, C>, ModelIDKey>): Promise<Program<T, C>>;

  async create<T extends Omit<Program<any, any>, ModelIDKey>>(body: T): Promise<T & Pick<Program<any, any>, ModelIDKey>>;

  public async create(body: Omit<Program<any, any>, ModelIDKey>): Promise<Program<any, any>> {
    return super._post(body);
  }

  public async update<T extends BaseNode, C extends BaseCommand>(
    id: ProgramID,
    body: Omit<Program<T, C>, ModelIDKey>
  ): Promise<Omit<Program<T, C>, ModelIDKey>>;

  public async update<T extends Omit<Program<any, any>, ModelIDKey>>(id: ProgramID, body: T): Promise<T>;

  public async update(id: ProgramID, body: Omit<Program<any, any>, ModelIDKey>): Promise<Omit<Program<any, any>, ModelIDKey>> {
    return super._put<Program<any, any>>(id, body);
  }

  public async delete(id: ProgramID): Promise<ProgramID> {
    return super._delete(id);
  }
}

export default ProgramResource;
