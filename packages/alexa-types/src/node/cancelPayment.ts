/* eslint-disable camelcase */

import { Node } from '@voiceflow/base-types';

import { NodeType } from './constants';

export interface StepData {
  productID: string;
}

export interface Step extends Node.Utils.BaseStep<StepData> {
  type: NodeType.CANCEL_PAYMENT;
}

export interface BaseTypedNode extends Node.Utils.BaseNode {
  type: NodeType.CANCEL_PAYMENT;
}

export interface NextNode extends BaseTypedNode, Node.Utils.NodeNextID {}

export interface CancelNode extends BaseTypedNode, Node.Utils.NodeSuccessFailID {
  cancel_product_id: string;
}

export type Node = NextNode | CancelNode;
