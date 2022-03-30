import { BaseNode, Nullable } from '@voiceflow/base-types';

import { NodeType } from './constants';

export interface StepData {
  productID: Nullable<string>;
}

export type StepPorts = BaseNode.Utils.SuccessFailStepPorts;

export interface Step extends BaseNode.Utils.BaseStep<StepData, BaseNode.Utils.BasePortList, StepPorts> {
  type: NodeType.PAYMENT;
}

export interface BaseTypedNode extends BaseNode.Utils.BaseNode {
  type: NodeType.PAYMENT;
}

export interface NextNode extends BaseTypedNode, BaseNode.Utils.NodeNextID {}

export interface PaymentNode extends BaseTypedNode, BaseNode.Utils.NodeSuccessFailID {
  product_id: string;
}

export type Node = NextNode | PaymentNode;
