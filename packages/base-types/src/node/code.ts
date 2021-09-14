import { NodeType } from './constants';
import { BaseNode, BaseStep, NodeSuccessFailID } from './utils';

export interface StepData {
  code: string;
}

export interface Step<Data = StepData> extends BaseStep<Data> {
  type: NodeType.CODE;
}

export interface Node extends BaseNode, NodeSuccessFailID {
  type: NodeType.CODE;
  code: string;
}
