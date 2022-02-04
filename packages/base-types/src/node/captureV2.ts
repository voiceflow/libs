import { Intent } from '@/models';
import { Nullable } from '@/types';

import { NodeType } from './constants';
import { BaseNode, BaseNodeNoMatch, BaseNodeNoReply, BaseStep, BaseStepNoMatch, BaseStepNoReply, NodeNextID } from './utils';

export enum CaptureType {
  INTENT = 'intent',
  QUERY = 'query', // capture everything the user says
}

export interface BaseCaptureData {
  noReply?: Nullable<BaseStepNoReply>;
  noMatch?: Nullable<BaseStepNoMatch>;
}

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

export interface Node extends BaseNode, NodeNextID {
  type: NodeType.CAPTURE_V2;
  intent?: {
    name: string;
    entities?: string[];
  };
  variable?: string;
  noReply?: Nullable<BaseNodeNoReply>;
  noMatch?: Nullable<BaseNodeNoMatch>;
}
