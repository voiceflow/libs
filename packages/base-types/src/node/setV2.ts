import { Nullable } from '@voiceflow/common';

import { NodeType } from './constants';
import { BaseNode, BaseStep, ExpressionTypeV2, NodeNextID } from './utils';

export interface Set {
  type: ExpressionTypeV2.VALUE | ExpressionTypeV2.ADVANCE;
  variable: Nullable<string>;
  expression: string;
}

export interface StepData {
  sets: Set[];
  title?: string;
}

export interface NodeSet {
  variable: Nullable<string>;
  expression: string | number;
}

export interface Step<Data = StepData> extends BaseStep<Data> {
  type: NodeType.SET_V2;
}

export interface Node extends BaseNode, NodeNextID {
  type: NodeType.SET_V2;
  sets: NodeSet[];
}
