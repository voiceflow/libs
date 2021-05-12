import { DefaultNode, DefaultStep, NodeID, NodeType, TraceFrame } from './types';

export type AnyTrace = TraceFrame<any, any>;

export type StepData<T extends AnyTrace = AnyTrace> = {
  traces: (null | T)[];
};

export type NodeData<T extends AnyTrace = AnyTrace> = {
  traces: T[];
  nextId?: NodeID;
};

export type Step<T extends AnyTrace = AnyTrace> = DefaultStep<NodeType.GENERAL, StepData<T>>;
export type Node<T extends AnyTrace = AnyTrace> = DefaultNode<NodeType.GENERAL, NodeData<T>>;
