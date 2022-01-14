import { Node } from '@voiceflow/base-types';

export interface StepData {
  loop: boolean;
  audio: string;
  title?: string;
  iconImage?: string;
  customPause: boolean;
  description?: string;
  backgroundImage?: string;
}

export interface Step extends Node.Stream.Step<StepData> {}

export interface Node extends Pick<Node.Stream.Node, keyof Node.Utils.BaseNode> {
  loop: boolean;
  play: string;
  NEXT?: Node.Utils.NodeID;
  title?: string;
  nextId?: Node.Utils.NodeID;
  PAUSE_ID: string;
  PREVIOUS?: Node.Utils.NodeID;
  icon_img?: string;
  description?: string;
  background_img?: string;
}
