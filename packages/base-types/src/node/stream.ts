import { EmptyRecord } from '@base-types/types';

import { NodeType, PortType } from './constants';
import { BaseNode, BasePort, BasePortList, BaseStep, BaseStepPorts, BaseTraceFrame, NodeID, TraceType } from './utils';

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

export interface StepPorts<BP extends Record<string, BasePort> = EmptyRecord> extends BaseStepPorts<{ [PortType.NEXT]: BasePort } & BP, []> {}

export interface Step<Data = StepData, Ports = StepPorts> extends BaseStep<Data, BasePortList, Ports> {
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
