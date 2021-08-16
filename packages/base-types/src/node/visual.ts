import { Nullable } from '@voiceflow/api-sdk';

import { NodeType } from './constants';
import { BaseNode, BaseStep, BaseTraceFrame, NodeNextID, TraceType } from './utils';

export enum DeviceType {
  MOBILE = 'mobile',
  TABLET = 'tablet',
  DESKTOP = 'desktop',
  SMART_WATCH = 'smart_watch',

  TELEVISION = 'television',
  IN_CAR_DISPLAY = 'in_car_display',

  ECHO_SPOT = 'echo_spot',
  ECHO_SHOW_8 = 'echo_show_8',
  ECHO_SHOW_10 = 'echo_show_10',

  FIRE_HD_8 = 'fire_hd_8',
  FIRE_HD_10 = 'fire_hd_10',
  FIRE_TV_CUBE = 'fire_tv_cube',

  GOOGLE_NEST_HUB = 'google_nest_hub',
}

export interface Dimensions {
  width: number;
  height: number;
}

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
  frameType?: FrameType;
  dimensions: Nullable<Dimensions>;
  canvasVisibility: CanvasVisibility;
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

export interface Step<Data = StepData> extends BaseStep<Data> {
  type: NodeType.VISUAL;
}

export interface Node extends BaseNode, NodeNextID {
  type: NodeType.VISUAL;
  data: StepData;
}

export interface TraceFrame extends BaseTraceFrame<StepData> {
  type: TraceType.VISUAL;
}
