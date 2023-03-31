import { AIContextParams, AIModelParams } from '../utils/ai';
import { NodeType } from './constants';
import { BaseNode, BaseStep, NodeNextID } from './utils';

export interface StepData extends AIModelParams, AIContextParams {
  prompt: string;
}

export interface Step<Data = StepData> extends BaseStep<Data> {
  type: NodeType.AI_RESPONSE;
}

export interface Node extends BaseNode, StepData, NodeNextID {
  type: NodeType.AI_RESPONSE;
}
