/* eslint-disable @typescript-eslint/no-empty-interface, camelcase */

import { Node } from '@voiceflow/base-types';

export interface StepData {
  loop: boolean;
  audio: string;
  title?: string;
  iconImage?: string;
  description?: string;
  backgroundImage?: string;
}

export interface Step extends Node.Stream.Step<StepData> {}

export interface Node extends Pick<Node.Stream.Node, keyof Node.Utils.BaseNode> {
  loop: boolean;
  play: string;
  title?: string;
  gNextId?: Node.Utils.NodeID;
  icon_img?: string;
  description?: string;
  background_img?: string;
}
