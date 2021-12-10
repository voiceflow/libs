/* eslint-disable @typescript-eslint/no-empty-interface */

import { Node, Nullable } from '@voiceflow/base-types';

import { Intent } from '@/types';

import { NodeNoMatch, NodeNoReply, StepNoMatch, StepNoReply } from './utils';

export interface BaseCaptureData<Voice> {
  noReply?: Nullable<StepNoReply<Voice>>;
  noMatch?: Nullable<StepNoMatch<Voice>>;
}

export interface IntentCaptureData<Voice> extends Node.CaptureV2.IntentCaptureData, BaseCaptureData<Voice> {
  intent: Intent<Voice>;
}

export interface QueryCaptureData<Voice> extends Node.CaptureV2.QueryCaptureData, BaseCaptureData<Voice> {}

export type StepData<Voice> = IntentCaptureData<Voice> | QueryCaptureData<Voice>;

export interface Step<Data = StepData<unknown>> extends Node.CaptureV2.Step<Data> {}

export interface Node extends Node.CaptureV2.Node {
  noReply?: Nullable<NodeNoReply>;
  noMatch?: Nullable<NodeNoMatch>;
}
