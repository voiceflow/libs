/* eslint-disable @typescript-eslint/no-empty-interface */

import { Node } from '@voiceflow/base-types';

import { NodeNoMatch, NodeReprompt, StepNoMatch, StepReprompt } from './utils';

export interface StepData<V> extends Node.Interaction.StepData, StepReprompt<V> {
  else: StepNoMatch<V>;
}

export interface Step<V> extends Node.Interaction.Step<StepData<V>> {}

export interface Node<E = Node.Utils.BaseEvent> extends Node.Interaction.Node<E>, NodeNoMatch, NodeReprompt {}
