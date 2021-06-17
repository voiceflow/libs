import * as s from 'superstruct';

import { SAPIKeyID, SCreatorID, SProjectID, SWorkspaceID } from './shared';

export const SAPIkey = s.object({
  _id: SAPIKeyID,

  workspaceID: SWorkspaceID,
  creatorID: SCreatorID,
  projectID: s.optional(SProjectID),

  name: s.string(),
  permissions: s.array(s.string()),
  scopes: s.array(s.string()),
  data: s.optional(s.object()),
});

export type APIKey = s.StructType<typeof SAPIkey>;
