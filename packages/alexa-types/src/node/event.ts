import { BaseNode, Nullable } from '@voiceflow/base-types';

import { NodeType } from './constants';

export interface Mapping {
  var: Nullable<string>;
  path: string;
}

export interface StepData {
  mappings: Mapping[];
  requestName: string;
}

export interface Step extends BaseNode.Utils.BaseStep<StepData> {
  type: NodeType.EVENT;
}

export interface Command extends BaseNode.Utils.BaseCommand {
  type: NodeType.EVENT;
  next?: BaseNode.Utils.NodeID;
  event: string;
  mappings: Mapping[];
}
