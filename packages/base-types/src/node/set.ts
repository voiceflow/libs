import type { Nullable } from '@voiceflow/common';

import type { NodeType } from './constants';
import type { BaseNode, BaseStep, Expression, NodeNextID } from './utils';

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

export interface Step<Data = StepData> extends BaseStep<Data> {
  type: NodeType.SET;
}

export interface Node extends BaseNode, NodeNextID {
  type: NodeType.SET;
  sets: NodeSet[];
}
