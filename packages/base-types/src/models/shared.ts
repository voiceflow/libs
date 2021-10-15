import { AnyRecord, Nullable } from '@voiceflow/api-sdk';

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

export interface IntentInput {
  text: string,
  slots?: string[]
  /** @deprecated shouldn't be used */
  voice?: string;
}

export type IntentSlotDialog = {
  prompt: any[];
  confirm: any[];
  utterances: IntentInput[];
  confirmEnabled: boolean;
};

export type IntentSlot = {
  id: string;
  dialog: IntentSlotDialog;
  required: boolean;
};

export type Intent = {
  key: string;
  name: string;
  slots?: IntentSlot[];
  inputs: IntentInput[];
  builtIn: boolean;
  _platform?: string;
};

export type Slot = {
  key: string;
  name: string;
  type: {
    value?: string
  };
  color?: string;
  inputs: string[];
}

export type SlotMapping = {
  slot: Nullable<string>;
  variable: Nullable<Variable>;
};

export type CommandMapping = {
  slot: string;
  variable: Variable;
};

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
  nodeID: NodeID,
  type: NodeType,
  coords?: [number,number],
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

export type BasePlatformData = AnyRecord;

export type PrototypeModel = {
  slots: Slot[];
  intents: Intent[];
}
