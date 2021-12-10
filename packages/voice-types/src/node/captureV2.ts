/* eslint-disable @typescript-eslint/no-empty-interface */

import { Node, Nullable } from '@voiceflow/base-types';

import { Intent } from '@/types';

import { NodeNoMatch, NodeNoReply, StepNoMatch, StepNoReply } from './utils';

export interface IntentCapture<Voice> extends Node.CaptureV2.IntentCapture {
  intent: Intent<Voice>;
}

export interface StepData<Voice> extends Node.CaptureV2.StepData {
  capture: IntentCapture<Voice> | Node.CaptureV2.QueryCapture;
  noReply?: Nullable<StepNoReply<Voice>>;
  noMatch?: Nullable<StepNoMatch<Voice>>;
}

export interface Step<Data = StepData<unknown>> extends Node.CaptureV2.Step<Data> {}

export interface Node extends Node.CaptureV2.Node {
  noReply?: Nullable<NodeNoReply>;
  noMatch?: Nullable<NodeNoMatch>;
}
