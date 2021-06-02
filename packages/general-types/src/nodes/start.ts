import { UnknownRecord } from '@voiceflow/api-sdk';

import { BaseNode, BaseStep, NodeID, NodeType } from './types';

export type StepData = UnknownRecord;

export interface Step extends BaseStep<StepData> {
  type: NodeType.START;
}

export interface Node extends BaseNode {
  type: NodeType.START;
  nextId?: NodeID;
}
