import { DeviceType, Dimensions } from '@/constants';

import { DefaultNode, DefaultStep, NodeID, NodeType, TraceFrame as DefaultTraceFrame, TraceType } from './types';

export enum CanvasVisibility {
  FULL = 'full',
  CROPPED = 'cropped',
  HIDDEN = 'hidden',
}

export enum APLType {
  JSON = 'JSON',
  SPLASH = 'SPLASH',
}

export enum VisualType {
  APL = 'apl',
  IMAGE = 'image',
}

export type ImageStepData = {
  visualType: VisualType.IMAGE;

  image: string | null;
  device: DeviceType | null;
  dimensions: Dimensions | null;
  canvasVisibility: CanvasVisibility;
};

export type APLStepData = {
  visualType: VisualType.APL;

  title?: string;
  aplType: APLType;
  imageURL?: string;
  document?: string;
  datasource?: string;
  aplCommands?: string;
  jsonFileName?: string;
};

export type StepData = ImageStepData | APLStepData;

export type NodeData = {
  data: StepData;
  nextId?: NodeID;
};

export type Step = DefaultStep<NodeType.VISUAL, StepData>;
export type Node = DefaultNode<NodeType.VISUAL, NodeData>;
export type TraceFrame = DefaultTraceFrame<TraceType.VISUAL, StepData>;
