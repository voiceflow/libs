import * as s from 'superstruct';

import { Platform } from '@/constants';

export const SPlatform = s.enums(Object.values(Platform));

export const SName = s.string();
export type Name = s.StructType<typeof SName>;

export const STeamID = s.number();
export type TeamID = s.StructType<typeof STeamID>;

// alias for the team id
export const SWorkspaceID = STeamID;
export type WorkspaceID = TeamID;

export const SBlockID = s.string();
export type BlockID = s.StructType<typeof SBlockID>;

export const SVariable = s.string();
export type Variable = s.StructType<typeof SVariable>;

export const STimestamp = s.number();
export type Timestamp = s.StructType<typeof STimestamp>;

export const SProjectID = s.string();
export type ProjectID = s.StructType<typeof SProjectID>;

// alias for the project id
export const SSkillID = SProjectID;
export type SkillID = ProjectID;

export const SCreatorID = s.number();
export type CreatorID = s.StructType<typeof SCreatorID>;

export const SVersionID = s.string();
export type VersionID = s.StructType<typeof SVersionID>;

export const SDiagramID = s.string();
export type DiagramID = s.StructType<typeof SDiagramID>;

export const SIntent = s.string();
export type Intent = s.StructType<typeof SIntent>;

export const SSlot = s.string();
export type Slot = s.StructType<typeof SSlot>;

export const SNodeID = s.string();
export type NodeID = s.StructType<typeof SNodeID>;

export const SNode = s.object({ id: SNodeID });
export type Node = s.StructType<typeof SNode>;

export const SBasePlatformData = s.object();
export type BasePlatformData = s.StructType<typeof SBasePlatformData>;
