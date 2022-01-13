import { Node, Nullable } from '@voiceflow/base-types';

import { NodeNoReply, NodeReprompt, StepNoReply, StepReprompt } from './utils';

/** @deprecated */
export interface StepData<Voice> extends Node.Capture.StepData, StepReprompt<Voice> {
  noReply?: Nullable<StepNoReply<Voice>>;
}

/** @deprecated */
export interface Step<Data = StepData<unknown>> extends Node.Capture.Step<Data> {}

/** @deprecated */
export interface Node extends Node.Capture.Node, NodeReprompt {
  noReply?: Nullable<NodeNoReply>;
}
