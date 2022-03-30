import { BaseNode } from '@voiceflow/base-types';

export interface StepData {
  loop: boolean;
  audio: string;
  title?: string;
  iconImage?: string;
  customPause: boolean;
  description?: string;
  backgroundImage?: string;
}

export interface StepPorts
  extends BaseNode.Utils.BaseStepPorts<
    {
      [BaseNode.PortType.NEXT]: BaseNode.Utils.BasePort;
      [BaseNode.PortType.FAIL]: BaseNode.Utils.BasePort;
      [BaseNode.PortType.PAUSE]?: BaseNode.Utils.BasePort;
    },
    []
  > {}

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
