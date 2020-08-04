import * as s from 'superstruct';

import { UnknownRecord } from '@/types';
import { dynamicObject } from '@/utils';

export const SPlatform = s.string();
export type Platform = s.StructType<typeof SPlatform>;

export const SName = s.string();
export type Name = s.StructType<typeof SName>;

export const STeamID = s.string();
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

export const SCreatorID = s.number();
export type CreatorID = s.StructType<typeof SCreatorID>;

export const SVersionID = s.string();
export type VersionID = s.StructType<typeof SVersionID>;

export const SProgramID = s.string();
export type ProgramID = s.StructType<typeof SProgramID>;

export const SDiagramID = s.string();
export type DiagramID = s.StructType<typeof SDiagramID>;

export const SIntent = s.string();
export type Intent = s.StructType<typeof SIntent>;

export const SSlot = s.string();
export type Slot = s.StructType<typeof SSlot>;

export const SCommandMapping = s.object({
  slot: SSlot,
  variable: SVariable,
});
export type CommandMapping = s.StructType<typeof SCommandMapping>;

export const SCommand = s.object({
  intent: SIntent,
  mappings: s.array(SCommandMapping),
  diagram_id: SDiagramID,
});
export type Command = s.StructType<typeof SCommand>;

export const SNodeID = s.string();
export type NodeID = s.StructType<typeof SNodeID>;

export const SPortType = s.string();
export type PortType = s.StructType<typeof SPortType>;

export const SPort = s.object({ type: SPortType, target: s.nullable(SNodeID), data: s.optional(s.object()) });
export type Port<D extends UnknownRecord = UnknownRecord> = Omit<s.StructType<typeof SPort>, 'data'> & { data?: D };

export const SNodeType = s.string();
export type NodeType = s.StructType<typeof SNodeID>;

export const SNode = dynamicObject({ id: SNodeID, type: SNodeType });
export type Node<D extends UnknownRecord = UnknownRecord> = Pick<s.StructType<typeof SNode>, 'id' | 'type'> & D;

export const SCoordPoint = s.number();
export type CoordPoint = s.StructType<typeof SCoordPoint>;

export const SBlockData = dynamicObject({
  name: s.optional(SName),
  color: s.optional(s.string()),
  steps: s.optional(s.array(SNodeID)),
});
export type BlockData<D extends UnknownRecord = UnknownRecord> = s.StructType<typeof SBlockData> & D;

export const SBlock = s.object({
  nodeID: SNodeID,
  x: SCoordPoint,
  y: SCoordPoint,
  type: SNodeType,
  data: SBlockData,
});
export type Block<D extends UnknownRecord = UnknownRecord> = Omit<s.StructType<typeof SBlock>, 'data'> & {
  data: BlockData<D>;
};

export const SStepData = dynamicObject({
  ports: s.array(SPort),
});
export type StepData<D extends UnknownRecord = UnknownRecord> = s.StructType<typeof SStepData> & D;

export const SStep = s.object({
  nodeID: SNodeID,
  type: SNodeType,
  data: SStepData,
});
export type Step<D extends UnknownRecord = UnknownRecord> = Omit<s.StructType<typeof SStep>, 'data'> & {
  data: StepData<D>;
};

export const SDiagramNode = s.union([SBlock, SStep]);
export type DiagramNode<D extends UnknownRecord = UnknownRecord> = Step<D> | Block<D>;

export const SBasePlatformData = s.object();
export type BasePlatformData = s.StructType<typeof SBasePlatformData>;
