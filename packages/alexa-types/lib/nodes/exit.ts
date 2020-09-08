import { DefaultNode, DefaultStep, NodeType } from './types';

export type StepData = {};

export type NodeData = {
  end: true;
};

export type Step = DefaultStep<NodeType.EXIT, StepData>;
export type Node = DefaultNode<NodeType.EXIT, NodeData>;
