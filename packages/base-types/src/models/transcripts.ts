import { CreatorID, ProjectID, Timestamp, TranscriptID } from './shared';

export interface Transcript {
  _id: TranscriptID;
  sessionID: string;
  createdAt: Timestamp;
  unread: boolean;
  device: string;
  os: string;
  browser: string;
  reportTags: string[];
  creatorID: CreatorID;
  projectID: ProjectID;
}


export enum FormatType {
  Trace = 'trace',
  Request = 'request',
}

export interface TranscriptMessage {
  ingested_at: string;
  metadata: { end: boolean; locale: string };
  session_id: string;
  state: unknown;
  timestamp: string;
  turn_id: string;
  type: string;
  version_id: string;
  format: string;
  payload: unknown;
}
