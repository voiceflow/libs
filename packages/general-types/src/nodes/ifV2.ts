import { DefaultNode, DefaultStep, Event, ExpressionData, NodeID, NodeType } from './types';

export type StepData = {
  expressions: ExpressionData[];
};

export type NodeData = {
  payload: { expressions: (string | number)[]; elseId?: NodeID };
  paths: Array<{ event?: Event; nextID: NodeID | null }>;
};

export type Step = DefaultStep<NodeType.IF_V2, StepData>;
export type Node = DefaultNode<NodeType.IF_V2, NodeData>;
