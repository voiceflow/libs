import { DefaultNode, DefaultStep, NodeID, NodeType, TraceFrame as DefaultTraceFrame, TraceType } from './types';

export type VariableMapping = [string | null, string | null][];

export type StepData = {
  diagramID: string | null;
  variableMap: null | { inputs: VariableMapping; outputs: VariableMapping };
};

export type NodeData = {
  nextId?: NodeID;
  diagram_id?: string;
  variable_map?: {
    inputs?: [string, string][];
    outputs?: [string, string][];
  };
};

export type Step = DefaultStep<NodeType.FLOW, StepData>;
export type Node = DefaultNode<NodeType.FLOW, NodeData>;
export type TraceFrame = DefaultTraceFrame<TraceType.FLOW, { diagramID: string }>;
