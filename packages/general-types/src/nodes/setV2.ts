import { Nullable } from '@voiceflow/api-sdk';

import { ExpressionTypeV2 } from '@/types';

import { BaseNode, BaseStep, NodeID, NodeType } from './types';

export interface Set {
  variable: Nullable<string>;
  expression: string;
  type: ExpressionTypeV2.VALUE | ExpressionTypeV2.ADVANCE;
}

export interface StepData {
  sets: Set[];
  title?: string;
}

export interface NodeSet {
  variable: Nullable<string>;
  expression: string | number;
}

export interface Step extends BaseStep<StepData> {
  type: NodeType.SET_V2;
}

export interface Node extends BaseNode {
  type: NodeType.SET_V2;
  sets: NodeSet[];
  nextId?: NodeID;
}
