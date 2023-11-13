import { AIContextParams, AIKnowledgeParams, AIModelParams } from '../utils/ai';
import { NodeType } from './constants';
import { BaseNode, BaseStep, NodeNextID } from './utils';

export interface Set extends AIContextParams {
  variable: string | null;
}

export interface StepData extends AIModelParams, AIKnowledgeParams {
  label: string;
  sets: Set[];

  // the existance of this property is also a flag if the step is a legacy version or not
  overrideParams?: boolean;
}

export interface Step<Data = StepData> extends BaseStep<Data> {
  type: NodeType.AI_SET;
}

export interface Node extends BaseNode, StepData, NodeNextID {
  type: NodeType.AI_SET;
}
