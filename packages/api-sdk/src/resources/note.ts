import type Fetch from '@api-sdk/fetch';
import type { BaseModels } from '@voiceflow/base-types';

import BaseResource from './base';

export const ENDPOINT = 'notes';

export type ModelKey = 'id';

class NoteResource extends BaseResource<NoteResource> {
  constructor(fetch: Fetch) {
    super({ fetch, clazz: NoteResource, endpoint: ENDPOINT });
  }

  public async upsert<T extends BaseModels.BaseNote = BaseModels.BaseNote>(versionID: string, note: T): Promise<T> {
    const { data } = await this.fetch.put<T>(`${this.endpoint}/${versionID}`, { note });

    return data;
  }

  public async delete(versionID: string, noteID: string): Promise<void> {
    await this.fetch.delete(`${this.endpoint}/${versionID}/${noteID}`);
  }
}

export default NoteResource;
