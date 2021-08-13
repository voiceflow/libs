import { NodeType } from './constants';
import { BaseNode, BaseStep, NodeSuccessFailID } from './utils';

export interface StepData {
  code: string;
}

export interface Step<D extends StepData = StepData> extends BaseStep<D> {
  type: NodeType.CODE;
}

export interface Node extends BaseNode, NodeSuccessFailID {
  type: NodeType.CODE;
  code: string;
}
