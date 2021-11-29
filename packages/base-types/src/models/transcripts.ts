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
