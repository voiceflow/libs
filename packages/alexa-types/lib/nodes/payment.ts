import { DefaultNode, DefaultStep, NodeType } from './types';

export type StepData = {
  productID: string | null;
};

export type NodeData =
  | { nextId?: string | null }
  | {
      fail_id?: string;
      product_id: string;
      success_id?: string;
    };

export type Step = DefaultStep<NodeType.PAYMENT, StepData>;
export type Node = DefaultNode<NodeType.PAYMENT, NodeData>;
