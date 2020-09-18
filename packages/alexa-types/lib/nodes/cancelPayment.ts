import { DefaultNode, DefaultStep, NodeType } from './types';

export type StepData = {
  productID: string;
};

export type NodeData =
  | { nextId?: string | null }
  | {
      fail_id?: string | null;
      success_id?: string | null;
      cancel_product_id: string;
    };

export type Step = DefaultStep<NodeType.CANCEL_PAYMENT, StepData>;
export type Node = DefaultNode<NodeType.CANCEL_PAYMENT, NodeData>;
