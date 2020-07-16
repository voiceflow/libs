import * as t from 'io-ts';

import { TBlockID, TCreatorID, TProjectID, TTeamID, TTimestamp, TVariable, TWorkspaceID } from '@/validations';

export type TeamID = t.TypeOf<typeof TTeamID>;

export type BlockID = t.TypeOf<typeof TBlockID>;

export type Variable = t.TypeOf<typeof TVariable>;

export type Timestamp = t.TypeOf<typeof TTimestamp>;

export type ProjectID = t.TypeOf<typeof TProjectID>;

export type CreatorID = t.TypeOf<typeof TCreatorID>;

export type WorkspaceID = t.TypeOf<typeof TWorkspaceID>;
