import { UnknownRecord } from '@base-types/types';

import { NodeType } from './constants';
import { BaseNode, BaseStep, BaseTraceFrame, TraceType } from './utils';

export type StepData = UnknownRecord;

export interface NodeData {
  end: true;
}

export interface Step<Data = StepData> extends BaseStep<Data> {
  type: NodeType.EXIT;
}

export interface Node extends BaseNode {
  type: NodeType.EXIT;
  end: true;
}

export interface TraceFrame extends BaseTraceFrame {
  type: TraceType.END;
}
