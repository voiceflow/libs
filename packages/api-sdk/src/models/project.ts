import * as s from 'superstruct';

import { Member, SMember } from './member';
import { BasePlatformData, SBasePlatformData, SCreatorID, SName, SPlatform, SProjectID, STeamID, SVersionID } from './shared';

export const SProjectPrototype = s.object({
  data: s.object(),
});

export type ProjectPrototype = s.StructType<typeof SProjectPrototype>;

export enum ProjectPrivacy {
  PUBLIC = 'public',
  PRIVATE = 'private',
}

export const SProject = s.object({
  _id: SProjectID,
  teamID: STeamID,
  creatorID: SCreatorID,

  name: SName,
  image: s.optional(s.string()),
  members: s.array(SMember),
  privacy: s.optional(s.enums([ProjectPrivacy.PRIVATE, ProjectPrivacy.PUBLIC])),
  platform: SPlatform,
  prototype: s.optional(SProjectPrototype),
  devVersion: s.optional(SVersionID),
  liveVersion: s.optional(SVersionID),
  platformData: SBasePlatformData,
});

export type Project<P extends BasePlatformData, M extends BasePlatformData> = Omit<s.StructType<typeof SProject>, 'platformData' | 'members'> & {
  members: Member<M>[];
  platformData: P;
};
