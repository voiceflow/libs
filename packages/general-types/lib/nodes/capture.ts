import { Prompt } from '@/types';

import { DefaultNode, DefaultStep, NodeID, NodeType } from './types';

export type StepData<V> = {
  slot: string | null;
  variable: string | null;
  reprompt: Prompt<V> | null;
  slotInputs: string[];
};

export type NodeData = {
  nextId?: NodeID;
  variable: string;
  reprompt?: string;
};

export type Step<V> = DefaultStep<NodeType.CAPTURE, StepData<V>>;
export type Node = DefaultNode<NodeType.CAPTURE, NodeData>;
