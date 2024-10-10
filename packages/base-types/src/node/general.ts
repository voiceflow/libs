import type { Nullable } from '@voiceflow/common';

import type { NodeType } from './constants';
import type { BaseNode, BaseStep, NodeNextID } from './utils';

export interface StepData {
  traces: Nullable<any>[];
}

export interface Step<Data = StepData> extends BaseStep<Data> {
  type: NodeType.GENERAL;
}

export interface Node extends BaseNode, NodeNextID {
  type: NodeType.GENERAL;
  traces: any[];
}
