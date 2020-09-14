import { DefaultNode, DefaultStep, NodeType } from './types';

export type Mapping = {
  var: string | null;
  path: string;
};

export type StepData = {
  mappings: Mapping[];
  requestName: string;
};

export type NodeData = {
  next?: string | null;
  event: string;
  mappings: Mapping[];
};

export type Step = DefaultStep<NodeType.EVENT, StepData>;
export type Node = DefaultNode<NodeType.EVENT, NodeData>;
