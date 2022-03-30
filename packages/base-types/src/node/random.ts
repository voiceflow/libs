import { EmptyRecord } from '@base-types/types';

import { NodeType } from './constants';
import { BaseNode, BasePort, BasePortList, BaseStep, BaseStepPorts, NodeNextIDs } from './utils';

export enum RandomType {
  DEFAULT = 1,
  DO_DUPLICATES = 2,
}

export interface StepData {
  paths: number;
  noDuplicates: boolean;
}

export type StepPorts = BaseStepPorts<EmptyRecord, BasePort[]>;

export interface Step<Data = StepData> extends BaseStep<Data, BasePortList, StepPorts> {
  type: NodeType.RANDOM;
}

export interface Node extends BaseNode, NodeNextIDs {
  type: NodeType.RANDOM;
  random: RandomType;
}
