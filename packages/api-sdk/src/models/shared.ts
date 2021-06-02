import * as s from 'superstruct';

import { AnyRecord, Nullable } from '@/types';
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
  _platform: s.optional(s.string()),
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
/**
 * @deprecated
 */
export type Command<T extends string = string, D extends AnyRecord = AnyRecord> = {
  type: T;
} & D;
export interface BaseCommand {
  type: string;
}

export const SNodeID = s.string();
export type NodeID = s.StructType<typeof SNodeID>;

export const SNodeType = s.string();
export type NodeType = s.StructType<typeof SNodeID>;

export const SNode = dynamicObject({ id: SNodeID, type: SNodeType });
/**
 * @deprecated
 */
export type Node<T extends string = string, D extends AnyRecord = AnyRecord> = {
  id: string;
  type: T;
} & D;
export interface BaseNode {
  id: string;
  type: string;
}

export const SCoordPoint = s.number();
export type CoordPoint = s.StructType<typeof SCoordPoint>;

export const SDiagramNode = s.object({
  nodeID: SNodeID,
  type: SNodeType,
  coords: s.optional(s.tuple([s.number(), s.number()])),
  data: s.object(),
});
export interface BaseDiagramNode<D extends AnyRecord = AnyRecord> extends Omit<s.StructType<typeof SDiagramNode>, 'data'> {
  data: D;
}

export interface BlockOnlyData {
  name: string;
  color: string;
  steps: string[];
}

export interface BaseBlock<D extends AnyRecord = AnyRecord> extends BaseDiagramNode<D & BlockOnlyData> {
  coords: [number, number];
}

export interface BasePort<PD extends AnyRecord = AnyRecord> {
  type: string;
  target: Nullable<string>;
  data?: PD;
  id: string;
}

// [BasePort, ...BasePort[]] means one or more ports
interface StepOnlyData<P = [BasePort, ...BasePort[]]> {
  ports: P;
}

export type BaseStep<D extends AnyRecord = AnyRecord, P = [BasePort, ...BasePort[]]> = BaseDiagramNode<D & StepOnlyData<P>>;

export const SBasePlatformData = s.object();
export type BasePlatformData = AnyRecord;

export const SPrototypeModel = s.object({
  slots: s.array(SSlot),
  intents: s.array(SIntent),
});

export type PrototypeModel = s.StructType<typeof SPrototypeModel>;
