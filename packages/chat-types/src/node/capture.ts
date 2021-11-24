/* eslint-disable @typescript-eslint/no-empty-interface */

import { Button, Node, Nullable, Request } from '@voiceflow/base-types';

import { NodeNoReply, NodeReprompt, StepNoReply, StepReprompt } from './utils';

export interface StepData extends Node.Capture.StepData, Button.StepButton, StepReprompt {
  noReply?: Nullable<StepNoReply>;
}

export interface Step<Data = StepData> extends Node.Capture.Step<Data> {}

export interface Node extends Node.Capture.Node, Request.NodeButton, NodeReprompt {
  noReply?: Nullable<NodeNoReply>;
}
