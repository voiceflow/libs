import type { BaseButton } from '@voiceflow/base-types';
import type { VoiceNode } from '@voiceflow/voice-types';
import type { Voice } from '@voiceflow-types/constants';

export interface VoiceStepData extends VoiceNode.Prompt.StepData<Voice>, BaseButton.StepButton {}

export interface VoiceStep extends VoiceNode.Prompt.Step<VoiceStepData> {}
