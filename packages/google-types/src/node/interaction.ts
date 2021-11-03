/* eslint-disable @typescript-eslint/no-empty-interface */

import { Button, Node as BaseNode, Request } from '@voiceflow/base-types';
import { Node } from '@voiceflow/voice-types';

import { Voice } from '@/constants';

import { ButtonNode } from './buttons';

export interface StepData extends Node.Interaction.StepData<Voice>, Button.StepButton {}

export interface Step extends Node.Interaction.Step<StepData> {}

export interface NodeInteraction extends BaseNode.Utils.SlotMappings {
  intent: string;
  nextIdIndex?: number;
  goTo?: {
    intentName: string;
  };
}

export interface Node extends Omit<Node.Interaction.Node, 'interactions'>, Omit<Request.NodeButton, 'buttons'> {
  buttons?: ButtonNode[];
  interactions: NodeInteraction[];
}
