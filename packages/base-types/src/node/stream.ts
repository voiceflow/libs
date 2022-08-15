import { PortType } from '@base-types/models';

import { NodeType } from './constants';
import { BaseNode, BasePort, BaseStep, BaseStepPorts, BaseTraceFrame, BuiltInNextPort, NodeID, TraceType } from './utils';

export interface StepData {
  src: string;
  loop: boolean;
  customPause?: boolean;
  title?: string;
  iconImage?: string;
  description?: string;
  backgroundImage?: string;
}

export enum TraceStreamAction {
  LOOP = 'LOOP',
  PLAY = 'PLAY',
  PAUSE = 'PAUSE',
}

export interface StepBaseBuiltInPorts extends BuiltInNextPort {}

export interface StepDefaultBuiltPorts extends StepBaseBuiltInPorts {
  [PortType.PAUSE]?: BasePort;
  [PortType.PREVIOUS]?: BasePort;
}

export interface StepPorts<BuiltInPorts extends StepBaseBuiltInPorts = StepDefaultBuiltPorts> extends BaseStepPorts<BuiltInPorts, []> {}

export interface Step<Data = StepData, Ports = StepPorts> extends BaseStep<Data, Ports> {
  type: NodeType.STREAM;
}

export interface Node extends BaseNode {
  type: NodeType.STREAM;
  src: string;
  loop: boolean;
  title?: string;
  iconImage?: string;
  description?: string;
  backgroundImage?: string;
  nextID?: NodeID;
  pauseID?: NodeID;
  previousID?: NodeID;
  platform?: string;
}

export interface TraceFramePayload {
  src: string;
  token: string;
  action: TraceStreamAction;
  loop: boolean;
  title?: string;
  iconImage?: string;
  description?: string;
  backgroundImage?: string;
}

export interface TraceFrame extends BaseTraceFrame<TraceFramePayload> {
  type: TraceType.STREAM;
}
