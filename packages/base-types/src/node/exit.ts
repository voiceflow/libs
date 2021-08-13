import { UnknownRecord } from '@voiceflow/api-sdk';

import { NodeType } from './constants';
import { BaseNode, BaseStep, BaseTraceFrame, TraceType } from './utils';

export type StepData = UnknownRecord;

export interface NodeData {
  end: true;
}

export interface Step<D extends StepData = StepData> extends BaseStep<D> {
  type: NodeType.EXIT;
}

export interface Node extends BaseNode {
  type: NodeType.EXIT;
  end: true;
}

export interface TraceFrame extends BaseTraceFrame {
  type: TraceType.END;
}
