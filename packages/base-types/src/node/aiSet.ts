import { NodeType } from './constants';
import { BaseNode, BaseStep, NodeNextID } from './utils';

export interface Set {
  prompt: string;
  variable: string | null;
}

export interface StepData {
  label: string;
  sets: Set[];
}

export interface Step<Data = StepData> extends BaseStep<Data> {
  type: NodeType.AI_SET;
}

export interface Node extends BaseNode, StepData, NodeNextID {
  type: NodeType.AI_SET;
}
