/* eslint-disable @typescript-eslint/no-empty-interface */

import { Button, Node, Request } from '@voiceflow/base-types';

import { NodeNoMatch, NodeReprompt, StepNoMatch, StepReprompt } from './utils';

export interface StepData extends Node.Interaction.StepData, StepReprompt, Button.StepButton {
  else: StepNoMatch;
}

export interface Step<Data = StepData> extends Node.Interaction.Step<Data> {}

export interface Node<Event = Node.Utils.BaseEvent> extends Node.Interaction.Node<Event>, NodeNoMatch, NodeReprompt, Request.NodeButton {}
