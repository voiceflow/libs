/* eslint-disable camelcase */

import { NodeID, NodeType } from '@voiceflow/general-types';

import { BaseNode, BaseStep } from './types';

export interface StepData {
  loop: boolean;
  audio: string;
  title?: string;
  iconImage?: string;
  customPause: boolean;
  description?: string;
  backgroundImage?: string;
}

export interface Step extends BaseStep<StepData> {
  type: NodeType.STREAM;
}

export interface Node extends BaseNode {
  type: NodeType.STREAM;
  loop: boolean;
  play: string;
  NEXT?: NodeID;
  title?: string;
  nextId?: NodeID;
  PAUSE_ID: string;
  PREVIOUS?: NodeID;
  icon_img?: string;
  description?: string;
  background_img?: string;
}
