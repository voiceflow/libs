import { NodeType } from './constants';
import { BaseNode, BaseStep, BaseTraceFrame, NodeID, TraceType } from './utils';

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

export interface Step<D extends StepData = StepData> extends BaseStep<D> {
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
  token: string;
  action: TraceStreamAction;
}

export interface TraceFrame extends BaseTraceFrame<TraceFramePayload> {
  type: TraceType.STREAM;
}
