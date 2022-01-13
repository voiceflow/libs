import { Button, Node as BaseNode, Request } from '@voiceflow/base-types';
import { Node } from '@voiceflow/voice-types';

import { Voice } from '@/constants';

import { ButtonNode } from './buttons';

export interface StepData extends Node.Interaction.StepData<Voice>, Button.StepButton {}

export interface Step extends Node.Interaction.Step<StepData> {}

export interface NodeGoTo {
  intentName: string;
}

export interface NodeInteraction extends BaseNode.Utils.SlotMappings {
  goTo?: NodeGoTo;
  intent: string;
  nextIdIndex?: number;
}

export interface Node extends Omit<Node.Interaction.Node, 'interactions'>, Omit<Request.NodeButton, 'buttons'>, BaseNode.Utils.NodeNextIDs {
  buttons?: ButtonNode[];
  interactions: NodeInteraction[];
}
