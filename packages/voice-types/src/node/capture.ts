/* eslint-disable @typescript-eslint/no-empty-interface */

import { Node, Nullable } from '@voiceflow/base-types';

import { NodeNoReply, NodeReprompt, StepNoReply, StepReprompt } from './utils';

export interface StepData<Voice> extends Node.Capture.StepData, StepReprompt<Voice> {
  noReply?: Nullable<StepNoReply<Voice>>;
}

export interface Step<Data = StepData<unknown>> extends Node.Capture.Step<Data> {}

export interface Node extends Node.Capture.Node, NodeReprompt {
  noReply?: Nullable<NodeNoReply>;
}
