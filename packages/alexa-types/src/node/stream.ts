import { BaseModels, BaseNode } from '@voiceflow/base-types';

export interface StepData {
  loop: boolean;
  audio: string;
  title?: string;
  iconImage?: string;
  customPause: boolean;
  description?: string;
  backgroundImage?: string;
}

export interface StepBuiltInPorts extends BaseNode.Stream.StepBaseBuiltInPorts {
  [BaseModels.PortType.PAUSE]?: BaseNode.Utils.BasePort;
  [BaseModels.PortType.PREVIOUS]: BaseNode.Utils.BasePort;
}

export interface StepPorts extends BaseNode.Stream.StepPorts<StepBuiltInPorts> {}

export interface Step extends BaseNode.Stream.Step<StepData, StepPorts> {}

export interface Node extends Pick<BaseNode.Stream.Node, keyof BaseNode.Utils.BaseNode> {
  loop: boolean;
  play: string;
  NEXT?: BaseNode.Utils.NodeID;
  title?: string;
  nextId?: BaseNode.Utils.NodeID;
  PAUSE_ID: string;
  PREVIOUS?: BaseNode.Utils.NodeID;
  icon_img?: string;
  description?: string;
  background_img?: string;
}
