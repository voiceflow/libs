/* eslint-disable camelcase */
import { Nullable } from '@voiceflow/api-sdk';

import { BaseNode, BaseStep, BaseTraceFrame, NodeID, NodeType, TraceType } from './types';

export type VariableMapping = [Nullable<string>, Nullable<string>][];

export interface StepData {
  diagramID: Nullable<string>;
  variableMap: Nullable<{ inputs: VariableMapping; outputs: VariableMapping }>;
}

export interface Step extends BaseStep<StepData> {
  type: NodeType.FLOW;
}

export interface Node extends BaseNode {
  type: NodeType.FLOW;
  nextId?: NodeID;
  diagram_id?: string;
  variable_map?: {
    inputs?: [string, string][];
    outputs?: [string, string][];
  };
}

export interface TraceFramePayload {
  name?: string;
  diagramID: string;
}

export interface TraceFrame extends BaseTraceFrame<TraceFramePayload> {
  type: TraceType.FLOW;
}
