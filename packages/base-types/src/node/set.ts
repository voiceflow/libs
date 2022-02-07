import { Nullable } from '@/types';

import { NodeType } from './constants';
import { BaseNode, BaseStep, Expression, NodeNextID } from './utils';

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
