import { NodeID, NodeType } from '@voiceflow/general-types';

import { DefaultNode, DefaultStep } from './types';

export type StepData = {
  loop: boolean;
  audio: string;
  title?: string;
  iconImage?: string;
  description?: string;
  backgroundImage?: string;
};

export type NodeData = {
  loop: boolean;
  play: string;
  title?: string;
  gNextId?: NodeID;
  icon_img?: string;
  description?: string;
  background_img?: string;
};

export type Step = DefaultStep<NodeType.STREAM, StepData>;
export type Node = DefaultNode<NodeType.STREAM, NodeData>;
