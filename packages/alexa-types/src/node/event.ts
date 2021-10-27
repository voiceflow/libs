import { Node, Nullable } from '@voiceflow/base-types';

import { NodeType } from './constants';

export interface Mapping {
  var: Nullable<string>;
  path: string;
}

export interface StepData {
  mappings: Mapping[];
  requestName: string;
}

export interface Step extends Node.Utils.BaseStep<StepData> {
  type: NodeType.EVENT;
}

export interface Command extends Node.Utils.BaseCommand {
  type: NodeType.EVENT;
  next?: Node.Utils.NodeID;
  event: string;
  mappings: Mapping[];
}
