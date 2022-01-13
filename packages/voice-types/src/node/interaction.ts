import { Node, Nullable } from '@voiceflow/base-types';

import { DeprecatedNodeNoMatch, NodeNoMatch, NodeNoReply, NodeReprompt, StepNoMatch, StepNoReply, StepReprompt } from './utils';

export interface StepData<Voice> extends Node.Interaction.StepData, StepReprompt<Voice> {
  else: StepNoMatch<Voice>;
  noReply?: Nullable<StepNoReply<Voice>>;
}

export interface Step<Data = StepData<unknown>> extends Node.Interaction.Step<Data> {}

export interface Node<Event = Node.Utils.BaseEvent> extends Node.Interaction.Node<Event>, DeprecatedNodeNoMatch, NodeReprompt {
  noMatch?: Nullable<NodeNoMatch>;
  noReply?: Nullable<NodeNoReply>;
}
