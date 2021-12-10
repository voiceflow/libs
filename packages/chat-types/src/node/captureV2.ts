/* eslint-disable @typescript-eslint/no-empty-interface */

import { Button, Node, Nullable, Request } from '@voiceflow/base-types';

import { NodeNoMatch, NodeNoReply, StepNoMatch, StepNoReply } from './utils';

export interface StepData extends Node.CaptureV2.StepData, Button.StepButton {
  noReply?: Nullable<StepNoReply>;
  noMatch?: Nullable<StepNoMatch>;
}

export interface Step<Data = StepData> extends Node.CaptureV2.Step<Data> {}

export interface Node extends Node.CaptureV2.Node, Request.NodeButton {
  noReply?: Nullable<NodeNoReply>;
  noMatch?: Nullable<NodeNoMatch>;
}
