/* eslint-disable camelcase */

import { Node, Nullable } from '@voiceflow/base-types';

import { NodeType } from './constants';

export interface StepData {
  productID: Nullable<string>;
}

export interface Step extends Node.Utils.BaseStep<StepData> {
  type: NodeType.PAYMENT;
}

export interface BaseTypedNode extends Node.Utils.BaseNode {
  type: NodeType.PAYMENT;
}

export interface NextNode extends BaseTypedNode, Node.Utils.NodeNextID {}

export interface PaymentNode extends BaseTypedNode, Node.Utils.NodeSuccessFailID {
  product_id: string;
}

export type Node = NextNode | PaymentNode;
