import { Nullable } from '@voiceflow/api-sdk';

import { NodeType } from './constants';
import { BaseNode, BaseStep, BaseTraceFrame, NodeNextID } from './utils';

export type AnyTrace = BaseTraceFrame<any>;

export interface StepData<T extends AnyTrace = AnyTrace> {
  traces: Nullable<T>[];
}

export interface Step<D extends StepData = StepData> extends BaseStep<D> {
  type: NodeType.GENERAL;
}

export interface Node<T extends AnyTrace = AnyTrace> extends BaseNode, NodeNextID {
  type: NodeType.GENERAL;
  traces: T[];
}
