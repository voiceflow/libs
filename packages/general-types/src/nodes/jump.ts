import { Nullable } from '@voiceflow/api-sdk';

import { BaseCommand, BaseStep, DataWithMappings, NodeID, NodeType } from './types';

// called the "intent block" on creator-app
export interface StepData extends DataWithMappings {
  intent: Nullable<string>;
}

export interface Step extends BaseStep<StepData> {
  type: NodeType.INTENT;
}

export interface Command extends BaseCommand, Required<DataWithMappings> {
  type: NodeType.INTENT;
  next: NodeID;
  intent: string;
}
