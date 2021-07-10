import { NodeID } from '@voiceflow/general-types';
import { Node as GeneralNode, StepData as GeneralStepData } from '@voiceflow/general-types/build/nodes/capture';

import { Voice } from '@/types';

import { BaseStep, NodeType } from './types';

export type StepData = Omit<GeneralStepData<Voice>, 'chips' | 'buttons' | 'buttonsLayout'>;

export interface NodeData {
  nextId?: NodeID;
  variable: string;
  reprompt?: string;
}

export interface Step extends BaseStep<StepData> {
  type: NodeType.CAPTURE;
}

export interface Node extends Omit<GeneralNode, 'type' | 'chips' | 'buttons'> {
  type: NodeType.CAPTURE;
}
