import { DefaultNode, DefaultStep, NodeType } from './types';

export type StepData = {};

export type NodeData = {
  nextId?: string | null;
  link_account: true;
};

export type Step = DefaultStep<NodeType.ACCOUNT_LINKING, StepData>;
export type Node = DefaultNode<NodeType.ACCOUNT_LINKING, NodeData>;
