import { APLStepData, APLType } from '@voiceflow/general-types/build/nodes/visual';

import { BaseNode, BaseStep, NodeType } from './types';

export interface StepData extends Omit<APLStepData, 'visualType' | 'aplType'> {
  type: APLType;
}

export interface Step extends BaseStep<StepData> {
  type: NodeType.DISPLAY;
}

export interface Node extends BaseNode {
  type: NodeType.DISPLAY;
  datasource: string;
  document: string;
  aplCommands?: string;
  nextId: string;
}
