/* eslint-disable camelcase */

import { NodeID } from '@voiceflow/general-types';

import { BaseNode, BaseStep, NodeType } from './types';

export interface StepData {
  productID: string;
}

export interface Step extends BaseStep<StepData> {
  type: NodeType.CANCEL_PAYMENT;
}

export interface BaseTypedNode extends BaseNode {
  type: NodeType.CANCEL_PAYMENT;
}

export interface NextNode extends BaseTypedNode {
  nextId?: NodeID;
}

export interface CancelNode extends BaseTypedNode {
  fail_id?: NodeID;
  success_id?: NodeID;
  cancel_product_id: string;
}

export type Node = NextNode | CancelNode;
