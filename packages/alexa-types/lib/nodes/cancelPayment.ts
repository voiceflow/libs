import { NodeID } from '@voiceflow/general-types';

import { DefaultNode, DefaultStep, NodeType } from './types';

export type StepData = {
  productID: string;
};

export type NodeData =
  | { nextId?: NodeID }
  | {
      fail_id?: NodeID;
      success_id?: NodeID;
      cancel_product_id: string;
    };

export type Step = DefaultStep<NodeType.CANCEL_PAYMENT, StepData>;
export type Node = DefaultNode<NodeType.CANCEL_PAYMENT, NodeData>;
