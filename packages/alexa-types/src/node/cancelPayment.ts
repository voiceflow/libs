import { BaseNode } from '@voiceflow/base-types';

import { NodeType } from './constants';

export interface StepData {
  productID: string;
}

export interface Step extends BaseNode.Utils.BaseStep<StepData> {
  type: NodeType.CANCEL_PAYMENT;
}

export interface BaseTypedNode extends BaseNode.Utils.BaseNode {
  type: NodeType.CANCEL_PAYMENT;
}

export interface NextNode extends BaseTypedNode, BaseNode.Utils.NodeNextID {}

export interface CancelNode extends BaseTypedNode, BaseNode.Utils.NodeSuccessFailID {
  cancel_product_id: string;
}

export type Node = NextNode | CancelNode;
