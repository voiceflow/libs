import { DefaultNode, DefaultStep, NodeID, NodeType, TraceFrame as BaseTraceFrame, TraceType } from './types';

export type StepData = {
  src: string;
  loop: boolean;
  customPause?: boolean;
};

export type NodeData = {
  src: string;
  loop: boolean;
  nextID?: NodeID;
  pauseID?: NodeID;
  previousID?: NodeID;
};

export enum TraceStreamAction {
  LOOP = 'LOOP',
  PLAY = 'PLAY',
  PAUSE = 'PAUSE',
}

export type Step = DefaultStep<NodeType.STREAM, StepData>;
export type Node = DefaultNode<NodeType.STREAM, NodeData>;
export type TraceFrame = BaseTraceFrame<TraceType.STREAM, { src: string; action: TraceStreamAction; token: string }>;
