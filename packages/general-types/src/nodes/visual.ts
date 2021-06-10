import { Nullable } from '@voiceflow/api-sdk';

import { DeviceType, Dimensions } from '@/constants';

import { BaseNode, BaseStep, BaseTraceFrame, NodeID, NodeType, TraceType } from './types';

export enum CanvasVisibility {
  FULL = 'full',
  HIDDEN = 'hidden',
  CROPPED = 'cropped',
}

export enum APLType {
  JSON = 'JSON',
  SPLASH = 'SPLASH',
}

export enum VisualType {
  APL = 'apl',
  IMAGE = 'image',
}

export enum FrameType {
  AUTO = 'AUTO',
  DEVICE = 'DEVICE',
  CUSTOM_SIZE = 'CUSTOM_SIZE',
}

interface BaseStepData {
  visualType: VisualType;
}

export interface ImageStepData extends BaseStepData {
  visualType: VisualType.IMAGE;

  image: Nullable<string>;
  device: Nullable<DeviceType>;
  dimensions: Nullable<Dimensions>;
  canvasVisibility: CanvasVisibility;
  frameType?: FrameType;
}

export interface APLStepData extends BaseStepData {
  visualType: VisualType.APL;

  title?: string;
  aplType: APLType;
  imageURL?: string;
  document?: string;
  datasource?: string;
  aplCommands?: string;
  jsonFileName?: string;
}

export type StepData = ImageStepData | APLStepData;

export interface Step extends BaseStep<StepData> {
  type: NodeType.VISUAL;
}

export interface Node extends BaseNode {
  type: NodeType.VISUAL;
  data: StepData;
  nextId?: NodeID;
}

export interface TraceFrame extends BaseTraceFrame<StepData> {
  type: TraceType.VISUAL;
}
