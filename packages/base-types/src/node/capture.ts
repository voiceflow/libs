import { Nullable } from '@voiceflow/api-sdk';

import { StepButtons } from '@/button';
import { NodeButtons } from '@/request';

import { NodeType } from './constants';
import { BaseNode, BaseStep, NodeNextID } from './utils';

export interface StepData extends StepButtons {
  slot: Nullable<string>;
  variable: Nullable<string>;
  slotInputs: string[];
}

export interface Step<D extends StepData = StepData> extends BaseStep<D> {
  type: NodeType.CAPTURE;
}

export interface Node extends BaseNode, NodeButtons, NodeNextID {
  type: NodeType.CAPTURE;
  variable: string;
}
