import { Command as PushCommand, StepData as PushStepData } from '@voiceflow/general-types/build/nodes/push';

import { BaseStep, NodeType } from './types';

export type StepData = PushStepData;

export interface Step extends BaseStep<StepData> {
  type: NodeType.COMMAND;
}

export interface Command extends Omit<PushCommand, 'type'> {
  type: NodeType.COMMAND;
}
