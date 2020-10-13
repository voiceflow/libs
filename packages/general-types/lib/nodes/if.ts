import { DefaultNode, DefaultStep, Expression, NodeID, NodeType } from './types';

export type StepData = {
  expressions: Expression[];
};

export type NodeData = {
  elseId?: NodeID;
  nextIds: string[];
  expressions: (string | number)[];
};

export type Step = DefaultStep<NodeType.IF, StepData>;
export type Node = DefaultNode<NodeType.IF, NodeData>;
