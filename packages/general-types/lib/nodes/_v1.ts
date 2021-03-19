import { Port } from '@voiceflow/api-sdk';

import { DefaultNode, DefaultStep, Event, NodeID, TraceFrame as DefaultTraceFrame } from './types';

export type StepData<B = unknown> = {
  _v: 1;
  payload: B;
  stop?: boolean;
  defaultPath?: number;
};

export type NodeData<E = Event> = {
  _v: 1;
  payload: unknown;
  stop: boolean;
  defaultPath?: number; // index starting from 0
  paths: Array<{ event?: E; nextID: NodeID | null }>;
};

export type Node = DefaultNode<string, NodeData>;
export type Step<B = unknown, E = Event> = DefaultStep<string, StepData<B>, Port<{ event?: E }>[]>;
export type TraceFrame = DefaultTraceFrame<
  string,
  { data: unknown; paths: Array<{ event?: Event; nextID: NodeID | null }>; stop: boolean; defaultPath?: number }
>;
