import { SlotMapping } from '@voiceflow/api-sdk';

import { NoMatches, Prompt } from '@/types';

import { DefaultNode, DefaultStep, GeneralEvent, NodeID, NodeType, TraceFrame as DefaultTraceFrame, TraceType } from './types';

export enum ElseType {
  PATH = 'path',
  REPROMPT = 'reprompt',
}

export type ElseData<V> = NoMatches<V> & {
  type: ElseType;
};

export type Choice = {
  intent: string;
  mappings?: SlotMapping[];
};

export type StepData<V> = {
  name: string;
  else: ElseData<V>;
  choices: Choice[];
  reprompt: Prompt<V> | null;
};

export type IntentEvent = {
  intent: string;
  mappings?: SlotMapping[];
};

export type NodeData<E = GeneralEvent> = {
  reprompt?: string;
  noMatches?: string[];
  interactions: {
    event: E[];
    nextID: string | null;
  }[];
  elseID?: NodeID | null;
};

export type Step<V> = DefaultStep<NodeType.INTERACTION, StepData<V>>;
export type Node = DefaultNode<NodeType.INTERACTION, NodeData>;
export type TraceFrame = DefaultTraceFrame<TraceType.CHOICE, { choices: { name: string }[] }>;
