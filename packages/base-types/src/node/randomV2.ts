import { NodeType } from './constants';
import { BaseNode, BaseStep, DynamicOnlyStepPorts, NodeNextIDs } from './utils';

export enum RandomType {
  DEFAULT = 1,
  DO_DUPLICATES = 2,
}

export interface StepData {
  namedPaths: {label: string}[];
  noDuplicates: boolean;
}

export interface StepPorts extends DynamicOnlyStepPorts {}

export interface Step<Data = StepData> extends BaseStep<Data, StepPorts> {
  type: NodeType.RANDOM_V2;
}

export interface Node extends BaseNode, NodeNextIDs {
  type: NodeType.RANDOM_V2;
  random: RandomType;
}
