import type { NodeType } from './constants';
import type { BaseNode, BaseStep, NodeRequiredNextID } from './utils';

export interface StepData {
  directive: string;
}

export interface Step<Data = StepData> extends BaseStep<Data> {
  type: NodeType.DIRECTIVE;
}

export interface Node extends BaseNode, NodeRequiredNextID {
  type: NodeType.DIRECTIVE;
  directive: string;
}
