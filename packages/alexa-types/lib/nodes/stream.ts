import { DefaultNode, DefaultStep, NodeType } from './types';

export type StepData = {
  loop: boolean;
  audio: string;
  title?: string;
  iconImage?: string;
  customPause: boolean;
  description?: string;
  backgroundImage?: string;
};

export type NodeData = {
  loop: boolean;
  play: string;
  NEXT?: string | null;
  title?: string;
  nextId?: string | null;
  PAUSE_ID: string;
  PREVIOUS?: string | null;
  icon_img?: string;
  description?: string;
  background_img?: string;
};

export type Step = DefaultStep<NodeType.STREAM, StepData>;
export type Node = DefaultNode<NodeType.STREAM, NodeData>;
