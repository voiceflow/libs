import { NodeType } from './constants';
import { BaseNode, BaseStep, NodeRequiredNextID } from './utils';

export interface StepData {
  directive: string;
}

export interface Step<D extends StepData = StepData> extends BaseStep<D> {
  type: NodeType.DIRECTIVE;
}

export interface Node extends BaseNode, NodeRequiredNextID {
  type: NodeType.DIRECTIVE;
  directive: string;
}
