import { NodeType } from './constants';
import { BaseNode, BaseStep, NodeNextID } from './utils';

export interface StepData {
  length: number;
}

export interface Step<Data = StepData> extends BaseStep<Data> {
  type: NodeType.GENERATIVE;
}

export interface Node extends BaseNode, NodeNextID {
  type: NodeType.GENERATIVE;
  prompt: string;
  length: number;
}
