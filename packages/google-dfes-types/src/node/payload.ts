import type { BaseNode } from '@voiceflow/base-types';

import type { NodeType } from './constants';

export interface StepData {
  data: string;
}

export interface Step extends BaseNode.Utils.BaseStep<StepData> {
  type: NodeType.PAYLOAD;
}

export interface Node extends BaseNode.Utils.BaseNode {
  type: NodeType.PAYLOAD;
  data: string;
  nextID?: string;
}
