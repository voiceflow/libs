import { DefaultNode, DefaultStep, NodeType } from './types';

export type StepData = {
  code: string;
};

export type NodeData = {
  code: string;
  fail_id?: string;
  success_id?: string;
};

export type Step = DefaultStep<NodeType.CODE, StepData>;
export type Node = DefaultNode<NodeType.CODE, NodeData>;
