import { Nullable } from '@voiceflow/api-sdk';

import { BaseNode, BaseStep, BaseTraceFrame, NodeID, NodeType } from './types';

export type AnyTrace = BaseTraceFrame<any>;

export interface StepData<T extends AnyTrace = AnyTrace> {
  traces: Nullable<T>[];
}

export interface Step<T extends AnyTrace = AnyTrace> extends BaseStep<StepData<T>> {
  type: NodeType.GENERAL;
}

export interface Node<T extends AnyTrace = AnyTrace> extends BaseNode {
  type: NodeType.GENERAL;
  traces: T[];
  nextId?: NodeID;
}
