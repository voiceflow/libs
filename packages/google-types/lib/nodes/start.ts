import { DefaultNode, DefaultStep, NodeType } from './types';

export type StepData = {};

export type NodeData = {
  nextId?: string;
};

export type Step = DefaultStep<NodeType.START, StepData>;
export type Node = DefaultNode<NodeType.START, NodeData>;
