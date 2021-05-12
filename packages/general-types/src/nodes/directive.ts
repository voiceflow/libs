import { DefaultNode, DefaultStep, NodeType } from './types';

export type StepData = {
  directive: string;
};

export type NodeData = {
  directive: string;
  nextId: string;
};

export type Step = DefaultStep<NodeType.DIRECTIVE, StepData>;
export type Node = DefaultNode<NodeType.DIRECTIVE, NodeData>;
