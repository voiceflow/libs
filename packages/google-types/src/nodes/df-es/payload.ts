import { BaseNode, BaseStep } from '../types';
import { NodeType } from './types';

export type StepData = {
  payload: string;
};

export interface Step extends BaseStep<StepData> {
  type: NodeType.PAYLOAD;
}

export interface Node extends BaseNode {
  type: NodeType.PAYLOAD;
  payload: string;
  nextID?: string;
}
