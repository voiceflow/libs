import { Intent } from '@chat-types/models';
import { BaseNode, Nullable } from '@voiceflow/base-types';

import { NodeNoMatch, NodeNoReply, StepNoMatch, StepNoReply } from './utils';

export interface IntentCapture extends BaseNode.CaptureV2.IntentCapture {
  intent: Intent;
}

export interface StepData extends BaseNode.CaptureV2.StepData {
  capture: IntentCapture | BaseNode.CaptureV2.QueryCapture;
  noReply?: Nullable<StepNoReply>;
  noMatch?: Nullable<StepNoMatch>;
}

export interface Step<Data = StepData> extends BaseNode.CaptureV2.Step<Data> {}

export interface Node extends BaseNode.CaptureV2.Node {
  noReply?: Nullable<NodeNoReply>;
  noMatch?: Nullable<NodeNoMatch>;
}
