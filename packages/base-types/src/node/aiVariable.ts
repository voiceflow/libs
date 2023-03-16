import { NodeType } from './constants';
import { BaseNode, BaseStep, NodeNextID } from './utils';

export interface AIVariableSet {
  prompt: string;
  variable: string | null;
}

export interface StepData {
  sets: AIVariableSet[];
}

export interface Step<Data = StepData> extends BaseStep<Data> {
  type: NodeType.AI_VARIABLE;
}

export interface Node extends BaseNode, StepData, NodeNextID {
  type: NodeType.AI_VARIABLE;
}
