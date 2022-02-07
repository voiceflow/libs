import { BaseNode, Nullable } from '@voiceflow/base-types';

import { DeprecatedNodeNoMatch, NodeNoMatch, NodeNoReply, NodeReprompt, StepNoMatch, StepNoReply, StepReprompt } from './utils';

export interface StepData<Voice> extends BaseNode.Interaction.StepData, StepReprompt<Voice> {
  else: StepNoMatch<Voice>;
  noReply?: Nullable<StepNoReply<Voice>>;
}

export interface Step<Data = StepData<unknown>> extends BaseNode.Interaction.Step<Data> {}

export interface Node<Event = BaseNode.Utils.BaseEvent> extends BaseNode.Interaction.Node<Event>, DeprecatedNodeNoMatch, NodeReprompt {
  noMatch?: Nullable<NodeNoMatch>;
  noReply?: Nullable<NodeNoReply>;
}
