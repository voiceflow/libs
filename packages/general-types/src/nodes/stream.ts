import { BaseNode, BaseStep, BaseTraceFrame, NodeID, NodeType, TraceType } from './types';

export interface StepData {
  src: string;
  loop: boolean;
  customPause?: boolean;
}

export enum TraceStreamAction {
  LOOP = 'LOOP',
  PLAY = 'PLAY',
  PAUSE = 'PAUSE',
}

export interface Step extends BaseStep<StepData> {
  type: NodeType.STREAM;
}

export interface Node extends BaseNode {
  type: NodeType.STREAM;
  src: string;
  loop: boolean;
  nextID?: NodeID;
  pauseID?: NodeID;
  previousID?: NodeID;
}

export interface TraceFramePayload {
  src: string;
  action: TraceStreamAction;
  token: string;
}

export interface TraceFrame extends BaseTraceFrame<TraceFramePayload> {
  type: TraceType.STREAM;
}
