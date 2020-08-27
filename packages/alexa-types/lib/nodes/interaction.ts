import { NoMatches, Prompt } from '@/types';
import { SlotMapping } from '@/version';

import { DefaultNode, DefaultStep, NodeType } from './types';

export enum ElseType {
  PATH = 'path',
  REPROMPT = 'reprompt',
}

export type ElseData = NoMatches & {
  type: ElseType;
};

export type Choice = {
  intent: string;
  mappings?: SlotMapping[];
};

export type StepData = {
  name: string;
  else: ElseData;
  choices: Choice[];
  reprompt: Prompt | null;
};

export type Interaction = {
  intent: string;
  mappings?: Required<SlotMapping>[];
  nextIdIndex?: number;
};

export type NodeData = {
  elseId?: string;
  nextIds: string[];
  reprompt?: string;
  noMatches?: string[];
  randomize?: boolean;
  interactions: Interaction[];
};

export type Step = DefaultStep<NodeType.INTERACTION, StepData>;

export type Node = DefaultNode<NodeType.INTERACTION, NodeData>;
