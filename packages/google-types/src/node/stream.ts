import type { BaseNode } from '@voiceflow/base-types';

export interface StepData {
  loop: boolean;
  audio: string;
  title?: string;
  iconImage?: string;
  description?: string;
  backgroundImage?: string;
}

export interface StepPorts extends BaseNode.Stream.StepPorts<BaseNode.Stream.StepBaseBuiltInPorts> {}

export interface Step extends BaseNode.Stream.Step<StepData, StepPorts> {}

export interface Node extends Pick<BaseNode.Stream.Node, keyof BaseNode.Utils.BaseNode> {
  loop: boolean;
  play: string;
  title?: string;
  gNextId?: BaseNode.Utils.NodeID;
  icon_img?: string;
  description?: string;
  background_img?: string;
}
