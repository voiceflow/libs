import type { Voice } from '@google-types/constants';
import type { BaseButton } from '@voiceflow/base-types';
import type { VoiceNode } from '@voiceflow/voice-types';

export interface VoiceStepData extends VoiceNode.Prompt.StepData<Voice>, BaseButton.StepButton {}

export interface VoiceStep extends VoiceNode.Prompt.Step<VoiceStepData> {}
