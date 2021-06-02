import { UnknownRecord } from '@voiceflow/api-sdk';

import { BaseNode, BaseStep, BaseTraceFrame, NodeType, TraceType } from './types';

export type StepData = UnknownRecord;

export interface NodeData {
  end: true;
}

export interface Step extends BaseStep<StepData> {
  type: NodeType.EXIT;
}

export interface Node extends BaseNode {
  type: NodeType.EXIT;
  end: true;
}

export interface TraceFrame extends BaseTraceFrame {
  type: TraceType.END;
}
