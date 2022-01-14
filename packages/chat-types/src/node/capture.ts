import { Button, Node, Nullable, Request } from '@voiceflow/base-types';

import { NodeNoReply, NodeReprompt, StepNoReply, StepReprompt } from './utils';

/** @deprecated */
export interface StepData extends Node.Capture.StepData, Button.StepButton, StepReprompt {
  noReply?: Nullable<StepNoReply>;
}

/** @deprecated */
export interface Step<Data = StepData> extends Node.Capture.Step<Data> {}

/** @deprecated */
export interface Node extends Node.Capture.Node, Request.NodeButton, NodeReprompt {
  noReply?: Nullable<NodeNoReply>;
}
