import Fetch from '@api-sdk/fetch';
import { BaseModels } from '@voiceflow/base-types';

import BaseResource from './base';

export const ENDPOINT = 'notes';

export type ModelKey = 'id';

class NoteResource extends BaseResource<NoteResource> {
  constructor(fetch: Fetch) {
    super({ fetch, clazz: NoteResource, endpoint: ENDPOINT });
  }

  public async upsert<T extends BaseModels.Version.BaseNote = BaseModels.Version.BaseNote>(versionID: string, note: T): Promise<T> {
    const { data } = await this.fetch.put<T>(`${versionID}`, { note });

    return data;
  }

  public async delete(versionID: string, noteID: string): Promise<void> {
    await this.fetch.delete(`${versionID}/${noteID}`);
  }
}

export default NoteResource;
