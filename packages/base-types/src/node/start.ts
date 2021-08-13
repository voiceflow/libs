import { UnknownRecord } from '@voiceflow/api-sdk';

import { NodeType } from './constants';
import { BaseNode, BaseStep, NodeID } from './utils';

export type StepData = UnknownRecord;

export interface Step<D extends StepData = StepData> extends BaseStep<D> {
  type: NodeType.START;
}

export interface Node extends BaseNode {
  type: NodeType.START;
  nextId?: NodeID;
}
