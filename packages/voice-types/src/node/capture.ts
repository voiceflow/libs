import type { BaseNode, Nullable } from '@voiceflow/base-types';

import type { NodeNoReply, NodeReprompt, StepNoReply, StepReprompt } from './utils';

/** @deprecated */
export interface StepData<Voice> extends BaseNode.Capture.StepData, StepReprompt<Voice> {
  noReply?: Nullable<StepNoReply<Voice>>;
}

/** @deprecated */
export interface Step<Data = StepData<unknown>> extends BaseNode.Capture.Step<Data> {}

/** @deprecated */
export interface Node extends BaseNode.Capture.Node, NodeReprompt {
  noReply?: Nullable<NodeNoReply>;
}
