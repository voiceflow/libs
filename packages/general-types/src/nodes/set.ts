import { Nullable } from '@voiceflow/api-sdk';

import { BaseNode, BaseStep, Expression, NodeID, NodeType } from './types';

export interface Set {
  variable: Nullable<string>;
  expression: Expression;
}

export interface StepData {
  sets: Set[];
}

export interface NodeSet {
  variable: Nullable<string>;
  expression: string | number;
}

export interface Step extends BaseStep<StepData> {
  type: NodeType.SET;
}

export interface Node extends BaseNode {
  type: NodeType.SET;
  sets: NodeSet[];
  nextId?: NodeID;
}
