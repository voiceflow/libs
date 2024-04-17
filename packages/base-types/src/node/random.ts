import type { NodeType } from './constants';
import type { BaseNode, BaseStep, DynamicOnlyStepPorts, NodeNextIDs } from './utils';

export enum RandomType {
  DEFAULT = 1,
  DO_DUPLICATES = 2,
}

export interface StepData {
  paths: number;
  noDuplicates: boolean;
}

export interface StepPorts extends DynamicOnlyStepPorts {}

export interface Step<Data = StepData> extends BaseStep<Data, StepPorts> {
  type: NodeType.RANDOM;
}

export interface Node extends BaseNode, NodeNextIDs {
  type: NodeType.RANDOM;
  random: RandomType;
}
