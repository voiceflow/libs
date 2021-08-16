/* eslint-disable @typescript-eslint/no-empty-interface */

import { Node } from '@voiceflow/base-types';

import { NodeNoMatch, NodeReprompt, StepNoMatch, StepReprompt } from './utils';

export interface StepData<Voice> extends Node.Interaction.StepData, StepReprompt<Voice> {
  else: StepNoMatch<Voice>;
}

export interface Step<Voice> extends Node.Interaction.Step<StepData<Voice>> {}

export interface Node<Event = Node.Utils.BaseEvent> extends Node.Interaction.Node<Event>, NodeNoMatch, NodeReprompt {}
