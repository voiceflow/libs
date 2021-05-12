import { SlotMapping } from '@voiceflow/api-sdk';

import { Chip, NoMatches, Prompt } from '@/types';

import { DefaultNode, DefaultStep, Event, NodeID, NodeType, TraceFrame as DefaultTraceFrame, TraceType } from './types';

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
  chips: Chip[] | null;
};

export type IntentEvent = {
  intent: string;
  mappings?: SlotMapping[];
};

export type NodeData<E = Event> = {
  reprompt?: string;
  noMatches?: string[];
  interactions: {
    event: E;
    nextId: string | null;
  }[];
  elseId?: NodeID | null;
  chips?: Chip[];
};

export type Step<V> = DefaultStep<NodeType.INTERACTION, StepData<V>>;
export type Node = DefaultNode<NodeType.INTERACTION, NodeData>;
export type TraceFrame = DefaultTraceFrame<TraceType.CHOICE, { choices: { intent?: string; name: string }[] }>;
