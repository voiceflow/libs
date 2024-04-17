import type { Voice } from '@google-types/constants';
import type { VoiceNode } from '@voiceflow/voice-types';

export interface VoiceStepData extends VoiceNode.Buttons.StepData<Voice> {}

export interface VoiceStep extends VoiceNode.Buttons.Step<VoiceStepData> {}
