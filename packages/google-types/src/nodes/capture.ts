import { Node as GeneralNode, StepData as GeneralStepData } from '@voiceflow/general-types/build/nodes/capture';

import { Voice } from '@/types';

import { BaseStep, NodeType } from './types';

export type StepData = GeneralStepData<Voice>;

export interface Step extends BaseStep<StepData> {
  type: NodeType.CAPTURE;
}

export interface Node extends Omit<GeneralNode, 'type'> {
  type: NodeType.CAPTURE;
}
