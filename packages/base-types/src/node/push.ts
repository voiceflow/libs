/* eslint-disable camelcase */
import { Nullable } from '@voiceflow/api-sdk';

import { NodeType } from './constants';
import { BaseCommand, BasePort, BaseStep, NodeID, SlotMappings } from './utils';

// called the "command block" on creator-app
export interface StepData extends SlotMappings {
  name: string;
  intent: Nullable<string>;
  diagramID: Nullable<string>;

  // manually define ports to allow command step processing
  ports: BasePort[];
}

export interface Step<D extends StepData = StepData> extends BaseStep<D> {
  type: NodeType.COMMAND;
}

export interface Command extends BaseCommand, Required<SlotMappings> {
  type: NodeType.COMMAND;
  next?: NodeID;
  intent: string;
  diagram_id?: string;
}
