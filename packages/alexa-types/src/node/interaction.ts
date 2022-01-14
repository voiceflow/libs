import { Node as BaseNode } from '@voiceflow/base-types';
import { Node } from '@voiceflow/voice-types';

import { Voice } from '@/constants';

export interface StepData extends Node.Interaction.StepData<Voice> {}

export interface Step extends Node.Interaction.Step<StepData> {}

export interface NodeGoTo {
  intentName: string;
}

export interface NodeInteraction extends BaseNode.Utils.SlotMappings {
  goTo?: NodeGoTo;
  intent: string;
  nextIdIndex?: number;
}

export interface Node extends Omit<Node.Interaction.Node, 'interactions'>, BaseNode.Utils.NodeNextIDs {
  interactions: NodeInteraction[];
}
