import { BaseButton, BaseNode, BaseRequest, Nullable } from '@voiceflow/base-types';

import { DeprecatedNodeNoMatch, NodeNoMatch, NodeNoReply, NodeReprompt, StepNoMatch, StepNoReply, StepReprompt } from './utils';

export interface StepData extends BaseNode.Interaction.StepData, BaseButton.StepButton, StepReprompt {
  else: StepNoMatch;
  noReply?: Nullable<StepNoReply>;
}

export interface Step<Data = StepData> extends BaseNode.Interaction.Step<Data> {}

export interface Node extends BaseNode.Interaction.Node, BaseRequest.NodeButton, DeprecatedNodeNoMatch, NodeReprompt {
  noMatch?: Nullable<NodeNoMatch>;
  noReply?: Nullable<NodeNoReply>;
}
