import * as s from 'superstruct';

import type Fetch from '@/fetch';
import { ProjectID, SProjectID, STranscript, Transcript, TranscriptID, TurnID } from '@/models';

import CrudResource from './crud';

const ENDPOINT = 'transcripts';

export const modelIDKey = '_id';
export type ModelIDKey = typeof modelIDKey;

class TranscriptResource extends CrudResource<typeof STranscript['schema'], ModelIDKey, TranscriptResource, 'sessionID'> {
  constructor(fetch: Fetch) {
    super({
      fetch,
      clazz: TranscriptResource,
      schema: STranscript.schema,
      modelIDKey,
      endpoint: ENDPOINT,
    });
  }

  public async getTranscripts(projectID: ProjectID) {
    s.assert(projectID, SProjectID);
    const { data } = await this.fetch.get(`${ENDPOINT}/${projectID}`);
    return data;
  }

  public async getHasUnreadTranscripts(projectID: ProjectID) {
    s.assert(projectID, SProjectID);
    const { data } = await this.fetch.get(`${ENDPOINT}/${projectID}/hasUnreadTranscripts`);
    return data;
  }

  public async create(body: Omit<Transcript, '_id'>): Promise<Transcript> {
    return super._post<Transcript>(body);
  }

  public async addUtteranceTo(projectID: ProjectID, transcriptID: TranscriptID, body: { turnID: TurnID; intentID: string; utteranceCount: number }) {
    const { data } = await this.fetch.post(`${ENDPOINT}/${projectID}/${transcriptID}/annotation/utteranceAddedTo`, body);
    return data;
  }

  public async update(projectID: ProjectID, transcriptID: TranscriptID, body: Partial<Transcript>): Promise<Transcript> {
    const { data } = await this.fetch.patch<Transcript>(`${ENDPOINT}/${projectID}/${transcriptID}`, body);
    return data;
  }

  public async delete(projectID: ProjectID, transcriptID: TranscriptID): Promise<TranscriptID> {
    const { data } = await this.fetch.delete<TranscriptID>(`${ENDPOINT}/${projectID}/${transcriptID}`);
    return data;
  }

  public async removeReportTag(projectID: ProjectID, transcriptID: TranscriptID, reportTagID: string) {
    return this.fetch.delete<TranscriptID>(`${ENDPOINT}/${projectID}/${transcriptID}/report_tag/${reportTagID}`);
  }

  public async attachReportTag(projectID: ProjectID, transcriptID: TranscriptID, reportTagID: string) {
    return this.fetch.post<TranscriptID>(`${ENDPOINT}/${projectID}/${transcriptID}/report_tag/${reportTagID}`);
  }

  public async getDialog(projectID: ProjectID, transcriptID: TranscriptID) {
    const { data } = await this.fetch.get(`${ENDPOINT}/${projectID}/${transcriptID}`);
    return data;
  }

  public async getExport(projectID: ProjectID, transcriptID: TranscriptID) {
    const { data } = await this.fetch.get(`${ENDPOINT}/${projectID}/${transcriptID}/export`);
    return data;
  }
}

export default TranscriptResource;
