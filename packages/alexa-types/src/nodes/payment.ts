/* eslint-disable camelcase */

import { NodeID } from '@voiceflow/general-types';

import { DefaultNode, DefaultStep, NodeType } from './types';

export type StepData = {
  productID: string | null;
};

export type NodeData =
  | { nextId?: NodeID }
  | {
      fail_id?: NodeID;
      product_id: string;
      success_id?: NodeID;
    };

export type Step = DefaultStep<NodeType.PAYMENT, StepData>;
export type Node = DefaultNode<NodeType.PAYMENT, NodeData>;
