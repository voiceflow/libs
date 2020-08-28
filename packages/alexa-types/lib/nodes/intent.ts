import { SlotMapping } from '@/version';

import { DefaultNode, DefaultStep, NodeType } from './types';

export type StepData = {
  intent: string | null;
  mappings?: SlotMapping[];
};

export type NodeData = {
  nextId?: string | null;
  intent: string;
  mappings?: SlotMapping[];
};

export type Step = DefaultStep<NodeType.INTENT, StepData>;
export type Node = DefaultNode<NodeType.INTENT, NodeData>;
