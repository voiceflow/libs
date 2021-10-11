import * as s from 'superstruct';

import { SCreatorID, SProjectID, STimestamp, STranscriptID } from './shared';

export const STranscript = s.object({
  _id: STranscriptID,
  sessionID: s.string(),
  createdAt: STimestamp,
  unread: s.boolean(),
  device: s.string(),
  os: s.string(),
  browser: s.string(),
  reportTags: s.array(s.string()),
  creatorID: SCreatorID,
  projectID: SProjectID,
});

export type Transcript = s.StructType<typeof STranscript>;
