/* eslint-disable @typescript-eslint/no-empty-interface */

import { Button, Node, Request } from '@voiceflow/base-types';

import { NodeNoMatch, NodeReprompt, StepNoMatch, StepReprompt } from './utils';

export interface StepData extends Node.Interaction.StepData, Button.StepButton, StepReprompt {
  else: StepNoMatch;
}

export interface Step extends Node.Interaction.Step<StepData> {}

export interface Node<E = Node.Utils.BaseEvent> extends Node.Interaction.Node<E>, Request.NodeButton, NodeNoMatch, NodeReprompt {}
