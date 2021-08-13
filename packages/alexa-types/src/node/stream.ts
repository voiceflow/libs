/* eslint-disable camelcase */

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

export interface Step extends Node.Utils.BaseStep<StepData> {
  type: Node.Stream.Step['type'];
}

export interface Node extends Node.Utils.BaseNode {
  type: Node.Stream.Node['type'];
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
