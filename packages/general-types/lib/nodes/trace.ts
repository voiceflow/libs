import { DefaultNode, DefaultStep, Event, NodeID, TraceFrame as DefaultTraceFrame } from './types';

export type NodeData<E = Event> = {
  _v: 1;
  data: Record<string, any>;
  stop: boolean;
  defaultPath?: number; // index starting from 0
  paths: Array<{ event: E; nextID: NodeID | null }>;
};

export type Step = DefaultStep<string, Record<string, unknown>>;
export type Node = DefaultNode<string, NodeData>;
export type TraceFrame = DefaultTraceFrame<string, Record<string, unknown>>;
