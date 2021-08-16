import { Nullable } from '@voiceflow/api-sdk';

import { NodeType } from './constants';
import { BaseNode, BaseStep, BaseTraceFrame, NodeNextID } from './utils';

export type AnyTrace = BaseTraceFrame<any>;

export interface StepData<Trace extends AnyTrace = AnyTrace> {
  traces: Nullable<Trace>[];
}

export interface Step<Data = StepData> extends BaseStep<Data> {
  type: NodeType.GENERAL;
}

export interface Node<Trace extends AnyTrace = AnyTrace> extends BaseNode, NodeNextID {
  type: NodeType.GENERAL;
  traces: Trace[];
}
