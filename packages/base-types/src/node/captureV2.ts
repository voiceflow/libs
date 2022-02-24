import { Intent } from '@base-types/models';
import { Nullable } from '@base-types/types';

import { NodeType } from './constants';
import {
  BaseNode,
  BaseNoMatchNodeData,
  BaseNoMatchStepData,
  BaseNoReplyNodeData,
  BaseNoReplyStepData,
  BaseStep,
  NodeIntentScope,
  NodeNextID,
  StepIntentScope,
} from './utils';

export enum CaptureType {
  INTENT = 'intent',
  QUERY = 'query', // capture everything the user says
}

export interface BaseCaptureData extends BaseNoReplyStepData, StepIntentScope, BaseNoMatchStepData {}

export interface IntentCapture {
  type: CaptureType.INTENT;
  intent?: Nullable<Intent>;
}

export interface QueryCapture {
  type: CaptureType.QUERY;
  variable: Nullable<string>;
}

export interface StepData extends BaseCaptureData {
  capture: IntentCapture | QueryCapture;
}
export interface Step<Data = StepData> extends BaseStep<Data> {
  type: NodeType.CAPTURE_V2;
}

export interface NodeIntent {
  name: string;
  entities?: string[];
}

export interface Node extends BaseNode, NodeNextID, NodeIntentScope, BaseNoReplyNodeData, BaseNoMatchNodeData {
  type: NodeType.CAPTURE_V2;
  intent?: NodeIntent;
  variable?: string;
}
