import { NodeID, Prompt } from '@voiceflow/general-types';

import { Voice } from '@/types';

import { DefaultNode, DefaultStep, NodeType } from './types';

export type StepData = {
  slot: string | null;
  variable: string | null;
  reprompt: Prompt<Voice> | null;
  slotInputs: string[];
};

export type NodeData = {
  nextId?: NodeID;
  variable: string;
  reprompt?: string;
};

export type Step = DefaultStep<NodeType.CAPTURE, StepData>;
export type Node = DefaultNode<NodeType.CAPTURE, NodeData>;
