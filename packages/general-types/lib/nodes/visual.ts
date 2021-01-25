import { DeviceType, Dimensions } from '@/constants';

import { DefaultNode, DefaultStep, NodeID, NodeType } from './types';

export enum CanvasVisibility {
  FULL = 'full',
  CROPPED = 'cropped',
}

export enum VisualType {
  IMAGE = 'image',
}

export type ImageStepData = {
  image: string | null;
  device: DeviceType | null;
  dimensions: Dimensions | null;
  visualType: VisualType.IMAGE;
  canvasVisibility: CanvasVisibility;
};

export type StepData = ImageStepData;

export type NodeData = {
  nextId?: NodeID;
};

export type Step = DefaultStep<NodeType.VISUAL, StepData>;
export type Node = DefaultNode<NodeType.VISUAL, NodeData>;
