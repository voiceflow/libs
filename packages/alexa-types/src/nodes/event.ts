import { Nullable } from '@voiceflow/api-sdk';
import { NodeID } from '@voiceflow/general-types';

import { BaseCommand, BaseStep, NodeType } from './types';

export interface Mapping {
  var: Nullable<string>;
  path: string;
}

export interface StepData {
  mappings: Mapping[];
  requestName: string;
}

export interface Step extends BaseStep<StepData> {
  type: NodeType.EVENT;
}

export interface Command extends BaseCommand {
  type: NodeType.EVENT;
  next?: NodeID;
  event: string;
  mappings: Mapping[];
}
