import { Command as JumpCommand, StepData as JumpStepData } from '@voiceflow/general-types/build/nodes/jump';

import { BaseStep, NodeType } from './types';

export type StepData = JumpStepData;

export interface Step extends BaseStep<StepData> {
  type: NodeType.INTENT;
}

export interface Command extends Omit<JumpCommand, 'type'> {
  type: NodeType.INTENT;
}
