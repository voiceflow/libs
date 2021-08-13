import { NodeType } from './constants';
import { BaseNode, BaseStep, NodeNextIDs } from './utils';

export enum RandomType {
  DEFAULT = 1,
  DO_DUPLICATES = 2,
}

export interface StepData {
  paths: number;
  noDuplicates: boolean;
}

export interface Step<D extends StepData = StepData> extends BaseStep<D> {
  type: NodeType.RANDOM;
}

export interface Node extends BaseNode, NodeNextIDs {
  type: NodeType.RANDOM;
  random: RandomType;
}
