import { SlotMapping } from '@voiceflow/api-sdk';
import { Chip, NodeID, NoMatches, Prompt } from '@voiceflow/general-types';

import { Voice } from '@/types';

import { DefaultNode, DefaultStep, NodeType } from './types';

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

export type StepData = {
  name: string;
  else: ElseData<Voice>;
  choices: Choice[];
  reprompt: Prompt<Voice> | null;
  chips: Chip[] | null;
};

export type Interaction = {
  intent: string;
  mappings?: SlotMapping[];
  nextIdIndex?: number;
};

export type NodeData = {
  elseId?: NodeID;
  nextIds: (string | null)[];
  reprompt?: string;
  noMatches?: string[];
  randomize?: boolean;
  interactions: Interaction[];
  chips?: Chip[];
};

export type Step = DefaultStep<NodeType.INTERACTION, StepData>;
export type Node = DefaultNode<NodeType.INTERACTION, NodeData>;
