import type { BaseButton } from '@voiceflow/base-types';
import type { VoiceNode } from '@voiceflow/voice-types';
import type { Voice } from '@voiceflow-types/constants';

export interface VoiceStepData extends VoiceNode.Interaction.StepData<Voice>, BaseButton.StepButton {}

export interface VoiceStep extends VoiceNode.Interaction.Step<VoiceStepData> {}
