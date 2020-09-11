import { DefaultNode, DefaultStep, NodeType } from './types';

export type StepData = {
  productID: string;
};

export type NodeData = {
  cancel_product_id: string;
  fail_id?: string;
  success_id?: string;
};

export type Step = DefaultStep<NodeType.CANCEL_PAYMENT, StepData>;
export type Node = DefaultNode<NodeType.CANCEL_PAYMENT, NodeData>;
