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

export const SStepType = s.string();
export type StepType = s.StructType<typeof SStepType>;

export const SStep = s.object({ type: SStepType, data: s.object(), ports: s.array(SPort), nodeID: SNodeID });
export type Step<D extends UnknownRecord = UnknownRecord> = Omit<s.StructType<typeof SStep>, 'data'> & { data: D };

export const SNodeType = s.string();
export type NodeType = s.StructType<typeof SNodeID>;

export const SNode = dynamicObject({ id: SNodeID, type: SNodeType });
export type Node<D extends UnknownRecord = UnknownRecord> = Pick<s.StructType<typeof SNode>, 'id' | 'type'> & D;

export const SCoordPoint = s.number();
export type CoordPoint = s.StructType<typeof SCoordPoint>;

export const SDiagramNodeData = dynamicObject({ name: SName, color: s.string() });
export type DiagramNodeData<D extends UnknownRecord = UnknownRecord> = Pick<s.StructType<typeof SNode>, 'name' | 'color'> & D;

export const SDiagramNode = s.object({
  nodeID: SNodeID,
  x: SCoordPoint,
  y: SCoordPoint,
  type: SNodeType,
  data: SDiagramNodeData,
});
export type DiagramNode<D extends UnknownRecord = UnknownRecord> = Omit<s.StructType<typeof SDiagramNode>, 'data'> & {
  data: DiagramNodeData<D>;
};

export const SBasePlatformData = s.object();
export type BasePlatformData = s.StructType<typeof SBasePlatformData>;
