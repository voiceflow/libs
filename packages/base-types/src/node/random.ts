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

export interface Step<Data = StepData> extends BaseStep<Data> {
  type: NodeType.RANDOM;
}

export interface Node extends BaseNode, NodeNextIDs {
  type: NodeType.RANDOM;
  random: RandomType;
}
