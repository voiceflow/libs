import { Node, Nullable } from '@voiceflow/base-types';

import { Intent } from '@/types';

import { NodeNoMatch, NodeNoReply, StepNoMatch, StepNoReply } from './utils';

export interface IntentCapture extends Node.CaptureV2.IntentCapture {
  intent: Intent;
}

export interface StepData extends Node.CaptureV2.StepData {
  capture: IntentCapture | Node.CaptureV2.QueryCapture;
  noReply?: Nullable<StepNoReply>;
  noMatch?: Nullable<StepNoMatch>;
}

export interface Step<Data = StepData> extends Node.CaptureV2.Step<Data> {}

export interface Node extends Node.CaptureV2.Node {
  noReply?: Nullable<NodeNoReply>;
  noMatch?: Nullable<NodeNoMatch>;
}
