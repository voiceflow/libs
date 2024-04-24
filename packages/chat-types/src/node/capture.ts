import type { BaseButton, BaseNode, BaseRequest, Nullable } from '@voiceflow/base-types';

import type { NodeNoReply, NodeReprompt, StepNoReply, StepReprompt } from './utils';

/** @deprecated */
export interface StepData extends BaseNode.Capture.StepData, BaseButton.StepButton, StepReprompt {
  noReply?: Nullable<StepNoReply>;
}

/** @deprecated */
export interface Step<Data = StepData> extends BaseNode.Capture.Step<Data> {}

/** @deprecated */
export interface Node extends BaseNode.Capture.Node, BaseRequest.NodeButton, NodeReprompt {
  noReply?: Nullable<NodeNoReply>;
}
