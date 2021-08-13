import { Nullable } from '@voiceflow/api-sdk';

import { NodeType } from './constants';
import { BaseCommand, BaseStep, NodeID, SlotMappings } from './utils';

// called the "intent block" on creator-app
export interface StepData extends SlotMappings {
  intent: Nullable<string>;
}

export interface Step<D extends StepData = StepData> extends BaseStep<D> {
  type: NodeType.INTENT;
}

export interface Command extends BaseCommand, Required<SlotMappings> {
  type: NodeType.INTENT;
  next: NodeID;
  intent: string;
}
