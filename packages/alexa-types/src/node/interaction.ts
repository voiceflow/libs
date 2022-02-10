import { Voice } from '@alexa-types/constants';
import { BaseNode } from '@voiceflow/base-types';
import { VoiceNode } from '@voiceflow/voice-types';

export interface StepData extends VoiceNode.Interaction.StepData<Voice> {}

export interface Step extends VoiceNode.Interaction.Step<StepData> {}
export interface NodeInteraction extends BaseNode.Utils.SlotMappings {
  intent: string;
  nextIdIndex?: number;
}

export interface Node extends Omit<VoiceNode.Interaction.Node, 'interactions'>, BaseNode.Utils.NodeNextIDs {
  interactions: NodeInteraction[];
}
