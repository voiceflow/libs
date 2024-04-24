import type { Nullable } from '@voiceflow/common';

import type { NodeType } from './constants';
import type { BaseNode, BaseStep, BaseTraceFrame, NodeNextID, NodeVariablesMappings, TraceType } from './utils';

export type VariableMapping = [Nullable<string>, Nullable<string>][];

export interface StepData {
  diagramID: Nullable<string>;
  variableMap: Nullable<{ inputs: VariableMapping; outputs: VariableMapping }>;
}

export interface Step<Data = StepData> extends BaseStep<Data> {
  type: NodeType.FLOW;
}

export interface Node extends BaseNode, NodeNextID {
  type: NodeType.FLOW;
  diagram_id?: string;
  variable_map?: NodeVariablesMappings;
}

export interface TraceFramePayload {
  name?: string;
  diagramID: string;
}

export interface TraceFrame extends BaseTraceFrame<TraceFramePayload> {
  type: TraceType.FLOW;
}
