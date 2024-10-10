import type { PortType } from '@base-types/models';

import type { NodeType } from './constants';
import type { BaseNode, BasePort, BaseStep, BaseStepPorts, BuiltInNextPort, NodeID } from './utils';

export interface StepData {
  src: string;
  loop: boolean;
  customPause?: boolean;
  title?: string;
  iconImage?: string;
  description?: string;
  backgroundImage?: string;
}

export interface StepBaseBuiltInPorts extends BuiltInNextPort {}

export interface StepDefaultBuiltPorts extends StepBaseBuiltInPorts {
  [PortType.PAUSE]?: BasePort;
  [PortType.PREVIOUS]?: BasePort;
}

export interface StepPorts<BuiltInPorts extends StepBaseBuiltInPorts = StepDefaultBuiltPorts>
  extends BaseStepPorts<BuiltInPorts, []> {}

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
