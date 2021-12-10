import { AnyRecord, Nullable } from '../utils';

export type Platform = string;

export type Name = string;

export type APIKeyID = string;

export type TeamID = string;

// alias for the team id
export type WorkspaceID = TeamID;

export type BlockID = string;

export type Variable = string;

export type TagID = string;

export type Timestamp = number;

export type ProjectID = string;

export type CreatorID = number;

export type VersionID = string;

export type ProgramID = string;

export type DiagramID = string;

export type TranscriptID = string;

export type TurnID = string;

export interface IntentInput {
  text: string;
  slots?: string[];
  /** @deprecated shouldn't be used */
  voice?: string;
}

export interface IntentSlotDialog {
  prompt: any[];
  confirm: any[];
  utterances: IntentInput[];
  confirmEnabled: boolean;
}

export interface IntentSlot {
  id: string;
  dialog: IntentSlotDialog;
  required: boolean;
}

export interface Intent {
  key: string;
  name: string;
  slots?: IntentSlot[];
  inputs: IntentInput[];
  builtIn?: boolean;
  _platform?: string;
}

export interface Slot {
  key: string;
  name: string;
  type: {
    value?: string;
  };
  color?: string;
  inputs: string[];
}

export interface SlotMapping {
  slot: Nullable<string>;
  variable: Nullable<Variable>;
}

export interface CommandMapping {
  slot: string;
  variable: Variable;
}

/**
 * @deprecated
 */
export type Command<T extends string = string, D extends AnyRecord = AnyRecord> = {
  type: T;
} & D;
export interface BaseCommand {
  type: string;
}

export type NodeID = string;

export type NodeType = string;

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

export type CoordPoint = number;

export interface BaseDiagramNode<D extends AnyRecord = AnyRecord> {
  nodeID: NodeID;
  type: NodeType;
  coords?: [number, number];
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

export enum PortType {
  FAIL = 'fail',
  NEXT = 'next',
  PAUSE = 'pause',
  NO_REPLY = 'no-reply',
  NO_MATCH = 'else',
  PREVIOUS = 'previous',
}

export interface BasePort<PD extends AnyRecord = AnyRecord> {
  id: string;
  type: string | PortType;
  data?: PD;
  target: Nullable<string>;
}

// [BasePort, ...BasePort[]] means one or more ports
interface StepOnlyData<P = [BasePort, ...BasePort[]]> {
  ports: P;
}

export type BaseStep<D extends AnyRecord = AnyRecord, P = [BasePort, ...BasePort[]]> = BaseDiagramNode<D & StepOnlyData<P>>;

export type BasePlatformData = AnyRecord;

export interface PrototypeModel {
  slots: Slot[];
  intents: Intent[];
}
