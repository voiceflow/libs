import { DefaultNode, DefaultStep, NodeID, NodeType, TraceFrame as DefaultTraceFrame } from './types';

export type StepData = {
  name: string;
  body: string;
  format?: string; // e.g. JSON/XML/raw/binary
  paths: { label: string; isDefault?: boolean }[];
};

export type NodeData = {
  name: string;
  body: any;
  format?: string;
  defaultPath?: number;
  paths: {
    label: string;
    nextId: NodeID | null;
  }[];
};

export type Step = DefaultStep<NodeType.TRACE, StepData>;
export type Node = DefaultNode<NodeType.TRACE, NodeData>;
export type TraceFrame = DefaultTraceFrame<string, NodeData>;
