import { BaseButton } from '@voiceflow/base-types';
import { VoiceNode } from '@voiceflow/voice-types';
import { Voice } from '@voiceflow-types/constants';

export interface VoiceStepData extends VoiceNode.Interaction.StepData<Voice>, BaseButton.StepButton {}

export interface VoiceStep extends VoiceNode.Interaction.Step<VoiceStepData> {}
