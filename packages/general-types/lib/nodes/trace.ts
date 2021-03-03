import { DefaultNode, DefaultStep, NodeID, TraceFrame as DefaultTraceFrame } from './types';

export type NodeData = {
  _v: 1;
  data: Record<string, any>;
  stop: boolean;
  defaultPath?: number; // index starting from 0
  paths: {
    label: string;
    nextID: NodeID | null;
  }[];
};

export type StepData = {
  data: Record<string, any> & {
    ports: {}[];
  };
};

export type Step = DefaultStep<string, StepData>;
export type Node = DefaultNode<string, NodeData>;
export type TraceFrame = DefaultTraceFrame<string, Record<string, any>>;
