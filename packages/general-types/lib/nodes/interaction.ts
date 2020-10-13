import { NoMatches, Prompt } from '@/types';
import { SlotMapping } from '@/version';

import { DefaultNode, DefaultStep, NodeID, NodeType } from './types';

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

export type Interaction = {
  intent: string;
  mappings?: SlotMapping[];
  nextIdIndex?: number;
};

export type NodeData = {
  elseId?: NodeID;
  nextIds: string[];
  reprompt?: string;
  noMatches?: string[];
  randomize?: boolean;
  interactions: Interaction[];
};

export type Step<V> = DefaultStep<NodeType.INTERACTION, StepData<V>>;
export type Node = DefaultNode<NodeType.INTERACTION, NodeData>;
