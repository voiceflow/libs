import { Nullable } from '@voiceflow/api-sdk';

import { BaseNode, BaseStep, NodeID, NodeType, NodeWithButtons, NodeWithReprompt, StepDataWithButtons, StepDataWithReprompt } from './types';

export interface StepData<V> extends StepDataWithButtons, StepDataWithReprompt<V> {
  slot: Nullable<string>;
  variable: Nullable<string>;
  slotInputs: string[];
}

export interface Step<V> extends BaseStep<StepData<V>> {
  type: NodeType.CAPTURE;
}

export interface Node extends BaseNode, NodeWithButtons, NodeWithReprompt {
  type: NodeType.CAPTURE;
  nextId?: NodeID;
  variable: string;
}
