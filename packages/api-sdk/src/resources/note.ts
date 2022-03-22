import Fetch from '@api-sdk/fetch';
import { BaseModels } from '@voiceflow/base-types';

import BaseResource from './base';

export const ENDPOINT = 'notes';

export type ModelKey = 'id';

class NoteResource extends BaseResource<NoteResource> {
  constructor(fetch: Fetch) {
    super({ fetch, clazz: NoteResource, endpoint: ENDPOINT });
  }

  public async upsert<T extends BaseModels.BaseNote = BaseModels.BaseNote>(versionID: string, note: T): Promise<T> {
    const { data } = await this.fetch.put<T>(`${this._getEndpoint()}/${versionID}`, { note });

    return data;
  }

  public async delete(versionID: string, noteID: string): Promise<void> {
    await this.fetch.delete(`${this._getEndpoint()}/${versionID}/${noteID}`);
  }
}

export default NoteResource;
