import { Button, Node, Nullable, Request } from '@voiceflow/base-types';

import { DeprecatedNodeNoMatch, NodeNoMatch, NodeNoReply, NodeReprompt, StepNoMatch, StepNoReply, StepReprompt } from './utils';

export interface StepData extends Node.Interaction.StepData, Button.StepButton, StepReprompt {
  else: StepNoMatch;
  noReply?: Nullable<StepNoReply>;
}

export interface Step<Data = StepData> extends Node.Interaction.Step<Data> {}

export interface Node<Event = Node.Utils.BaseEvent> extends Node.Interaction.Node<Event>, Request.NodeButton, DeprecatedNodeNoMatch, NodeReprompt {
  noMatch?: Nullable<NodeNoMatch>;
  noReply?: Nullable<NodeNoReply>;
}
