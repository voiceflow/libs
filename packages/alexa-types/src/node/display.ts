import { BaseNode } from '@voiceflow/base-types';

import { NodeType } from './constants';

export enum APLType {
  JSON = 'JSON',
  SPLASH = 'SPLASH',
}

export enum FrameType {
  AUTO = 'AUTO',
  DEVICE = 'DEVICE',
  CUSTOM_SIZE = 'CUSTOM_SIZE',
}

export interface StepData {
  type: APLType;
  title?: string;
  aplType: APLType;
  imageURL?: string;
  document?: string;
  datasource?: string;
  aplCommands?: string;
  jsonFileName?: string;
}
export interface Step extends BaseNode.Utils.BaseStep<StepData> {
  type: NodeType.DISPLAY;
}

export interface Node extends BaseNode.Utils.BaseNode, BaseNode.Utils.NodeRequiredNextID {
  type: NodeType.DISPLAY;
  datasource: string;
  document: string;
  aplCommands?: string;
}
