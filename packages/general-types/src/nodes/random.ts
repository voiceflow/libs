import { Nullable } from '@voiceflow/api-sdk';

import { BaseNode, BaseStep, NodeType } from './types';

export enum RandomType {
  DEFAULT = 1,
  DO_DUPLICATES = 2,
}

export interface StepData {
  paths: number;
  noDuplicates: boolean;
}

export interface Step extends BaseStep<StepData> {
  type: NodeType.RANDOM;
}

export interface Node extends BaseNode {
  type: NodeType.RANDOM;
  random: RandomType;
  nextIds: Nullable<string>[];
}
