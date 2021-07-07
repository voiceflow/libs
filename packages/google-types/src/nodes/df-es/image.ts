import { BaseNode, BaseStep } from '../types';
import { NodeType } from './types';

export type StepData = {
  imageUrl: string;
};

export interface Step extends BaseStep<StepData> {
  type: NodeType.IMAGE;
}

export interface Node extends BaseNode {
  type: NodeType.IMAGE;
  imageUrl: string;
  nextID?: string;
}
