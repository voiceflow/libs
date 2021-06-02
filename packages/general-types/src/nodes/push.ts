/* eslint-disable camelcase */
import { Nullable } from '@voiceflow/api-sdk';

import { BaseCommand, BasePort, BaseStep, DataWithMappings, NodeID, NodeType } from './types';

// called the "command block" on creator-app
export interface StepData extends DataWithMappings {
  name: string;
  intent: Nullable<string>;
  diagramID: Nullable<string>;

  // manually define ports to allow command step processing
  ports: BasePort[];
}

export interface Step extends BaseStep<StepData> {
  type: NodeType.COMMAND;
}

export interface Command extends BaseCommand, Required<DataWithMappings> {
  type: NodeType.COMMAND;
  next?: NodeID;
  intent: string;
  diagram_id?: string;
}
