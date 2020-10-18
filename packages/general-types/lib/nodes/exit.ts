import { DefaultNode, DefaultStep, NodeType, TraceFrame as DefaultTraceFrame, TraceType } from './types';

export type StepData = {};

export type NodeData = {
  end: true;
};

export type Step = DefaultStep<NodeType.EXIT, StepData>;
export type Node = DefaultNode<NodeType.EXIT, NodeData>;
export type TraceFrame = DefaultTraceFrame<TraceType.END>;
