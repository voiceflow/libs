import { DefaultNode, DefaultStep, Expression, NodeType } from './types';

export type StepData = {
  expressions: Expression[];
};

export type NodeData = {
  expressions: (string | number)[];
  nextIds: string[];
  elseId?: string;
};

export type Step = DefaultStep<NodeType.IF, StepData>;
export type Node = DefaultNode<NodeType.IF, NodeData>;
