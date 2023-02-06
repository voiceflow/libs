import { NodeType } from './constants';
import { BaseNode, BaseStep, NodeNextID } from './utils';

export interface StepData {
  prompt: string;
  length: number;
}

export interface Step<Data = StepData> extends BaseStep<Data> {
  type: NodeType.GENERATIVE;
}

export interface Node extends BaseNode, StepData, NodeNextID {
  type: NodeType.GENERATIVE;
}
