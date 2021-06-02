/* eslint-disable camelcase */
import { Nullable } from '@voiceflow/api-sdk';
import { NodeID } from '@voiceflow/general-types';

import { BaseNode, BaseStep, NodeType } from './types';

export interface StepData {
  productID: Nullable<string>;
}

export interface Step extends BaseStep<StepData> {
  type: NodeType.PAYMENT;
}

export interface BaseTypedNode extends BaseNode {
  type: NodeType.PAYMENT;
}

export interface NextNode extends BaseTypedNode {
  nextId?: NodeID;
}

export interface PaymentNode extends BaseTypedNode {
  fail_id?: NodeID;
  product_id: string;
  success_id?: NodeID;
}

export type Node = NextNode | PaymentNode;
