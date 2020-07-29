import * as s from 'superstruct';

import { Member, SMember } from './member';
import { BasePlatformData, SBasePlatformData, SCreatorID, SName, SPlatform, SProjectID, STeamID, STimestamp, SVersionID } from './shared';

export const SProjectModuleID = s.number();
export type SProjectModuleID = s.StructType<typeof SProjectModuleID>;

export const SProject = s.object({
  _id: SProjectID,
  teamID: STeamID,
  moduleID: s.optional(SProjectModuleID),
  creatorID: SCreatorID,

  name: SName,
  members: s.array(SMember),
  created: STimestamp,
  platform: SPlatform,
  devVersion: s.optional(SVersionID),
  platformData: SBasePlatformData,
});

export type Project<P extends BasePlatformData, M extends BasePlatformData> = Omit<s.StructType<typeof SProject>, 'platformData'> & {
  members: Member<M>[];
  platformData: P;
};
