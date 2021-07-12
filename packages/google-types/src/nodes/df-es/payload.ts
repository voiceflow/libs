import { BaseNode, BaseStep } from '../types';
import { NodeType } from './types';

export type StepData = {
  data: string;
};

export interface Step extends BaseStep<StepData> {
  type: NodeType.PAYLOAD;
}

export interface Node extends BaseNode {
  type: NodeType.PAYLOAD;
  data: string;
  nextID?: string;
}
