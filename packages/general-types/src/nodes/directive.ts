import { BaseNode, BaseStep, NodeType } from './types';

export interface StepData {
  directive: string;
}

export interface Step extends BaseStep<StepData> {
  type: NodeType.DIRECTIVE;
}

export interface Node extends BaseNode {
  type: NodeType.DIRECTIVE;
  directive: string;
  nextId: string;
}
