import { ExpressionTypeV2 } from '@/types';

import { DefaultNode, DefaultStep, NodeID, NodeType } from './types';

export type Set = {
  variable: string | null;
  expression: string;
  type: ExpressionTypeV2.VALUE | ExpressionTypeV2.ADVANCE;
};

export type StepData = {
  sets: Set[];
  title?: string;
};

export type NodeSet = {
  variable: string | null;
  expression: string | number;
};

export type NodeData = {
  sets: NodeSet[];
  nextId?: NodeID;
};

export type Step = DefaultStep<NodeType.SET_V2, StepData>;
export type Node = DefaultNode<NodeType.SET_V2, NodeData>;
