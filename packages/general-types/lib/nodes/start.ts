import { DefaultNode, DefaultStep, NodeID, NodeType } from './types';

export type StepData = Record<string, unknown>;

export type NodeData = {
  nextId?: NodeID;
};

export type Step = DefaultStep<NodeType.START, StepData>;
export type Node = DefaultNode<NodeType.START, NodeData>;
