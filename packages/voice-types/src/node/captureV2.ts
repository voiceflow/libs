import { Intent } from '@voice-types/models';
import { BaseNode, Nullable } from '@voiceflow/base-types';

import { NodeNoMatch, NodeNoReply, StepNoMatch, StepNoReply } from './utils';

export interface IntentCapture<Voice> extends BaseNode.CaptureV2.IntentCapture {
  intent: Intent<Voice>;
}

export interface StepData<Voice> extends BaseNode.CaptureV2.StepData {
  capture: IntentCapture<Voice> | BaseNode.CaptureV2.QueryCapture;
  noReply?: Nullable<StepNoReply<Voice>>;
  noMatch?: Nullable<StepNoMatch<Voice>>;
}

export interface Step<Data = StepData<unknown>> extends BaseNode.CaptureV2.Step<Data> {}

export interface Node extends BaseNode.CaptureV2.Node {
  noReply?: Nullable<NodeNoReply>;
  noMatch?: Nullable<NodeNoMatch>;
}
