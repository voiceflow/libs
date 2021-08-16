import { Node } from '@voiceflow/base-types';

import { NodeType } from './constants';

export interface StepData {
  data: string;
}

export interface Step extends Node.Utils.BaseStep<StepData> {
  type: NodeType.DF_ES_PAYLOAD;
}

export interface Node extends Node.Utils.BaseNode {
  type: NodeType.DF_ES_PAYLOAD;
  data: string;
  nextID?: string;
}
