import * as s from 'superstruct';

import { UnknownRecord } from '@/types';
import { dynamicObject } from '@/utils';

export const SPlatform = s.string();
export type Platform = s.StructType<typeof SPlatform>;

export const SName = s.string();
export type Name = s.StructType<typeof SName>;

export const SAPIKeyID = s.string();
export type APIKeyID = s.StructType<typeof SAPIKeyID>;

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

export const SIntentInput = s.object({
  text: s.string(),
  slots: s.optional(s.array(s.string())),
  voice: s.optional(s.string()),
});
export type IntentInput = s.StructType<typeof SIntentInput>;

export const SIntentSlotDialog = s.object({
  prompt: s.array(SIntentInput),
  confirm: s.array(SIntentInput),
  utterances: s.array(SIntentInput),
  confirmEnabled: s.boolean(),
});
export type IntentSlotDialog = s.StructType<typeof SIntentSlotDialog>;

export const SIntentSlot = s.object({
  id: s.string(),
  dialog: SIntentSlotDialog,
  required: s.boolean(),
});
export type IntentSlot = s.StructType<typeof SIntentSlot>;

export const SIntent = s.object({
  key: s.string(),
  name: s.string(),
  slots: s.optional(s.array(SIntentSlot)),
  inputs: s.array(SIntentInput),
  builtIn: s.optional(s.boolean()),
});
export type Intent = s.StructType<typeof SIntent>;

export const SSlot = s.object({
  key: s.string(),
  name: s.string(),
  type: s.object({ value: s.optional(s.string()) }),
  color: s.optional(s.string()),
  inputs: s.array(s.string()),
});
export type Slot = s.StructType<typeof SSlot>;

export const SSlotMapping = s.object({
  slot: s.nullable(s.string()),
  variable: s.nullable(SVariable),
});
export type SlotMapping = s.StructType<typeof SSlotMapping>;

export const SCommandMapping = s.object({
  slot: s.string(),
  variable: SVariable,
});
export type CommandMapping = s.StructType<typeof SCommandMapping>;

export const SCommand = dynamicObject({
  type: s.string(),
});
export type Command<T extends string = string, D extends UnknownRecord = UnknownRecord> = {
  type: T;
} & D;

export const SNodeID = s.string();
export type NodeID = s.StructType<typeof SNodeID>;

export const SNodeType = s.string();
export type NodeType = s.StructType<typeof SNodeID>;

export const SNode = dynamicObject({ id: SNodeID, type: SNodeType });
export type Node<T extends string = string, D extends UnknownRecord = UnknownRecord> = {
  id: string;
  type: T;
} & D;

export const SCoordPoint = s.number();
export type CoordPoint = s.StructType<typeof SCoordPoint>;

export const SDiagramNode = s.object({
  nodeID: SNodeID,
  type: SNodeType,
  coords: s.optional(s.tuple([s.number(), s.number()])),
  data: s.object(),
});
export type DiagramNode<T extends string = string, D extends UnknownRecord = UnknownRecord> = Omit<
  s.StructType<typeof SDiagramNode>,
  'data' | 'type'
> & {
  type: T;
  data: D;
};

export type Block<T extends string = string, D extends UnknownRecord = UnknownRecord> = DiagramNode<
  T,
  D & { name: string; color: string; steps: string[] }
> & {
  coords: [number, number];
};

export type Port<PD extends UnknownRecord = UnknownRecord> = {
  type: string;
  target: string | null;
  data?: PD;
  id: string;
};
// [Port, ...Port[]] means one or more ports
export type Step<T extends string = string, D extends UnknownRecord = UnknownRecord, P = [Port, ...Port[]]> = DiagramNode<T, D & { ports: P }>;

export const SBasePlatformData = s.object();
export type BasePlatformData = s.StructType<typeof SBasePlatformData>;

export const SPrototypeModel = s.object({
  slots: s.array(SSlot),
  intents: s.array(SIntent),
});

export type PrototypeModel = s.StructType<typeof SPrototypeModel>;
