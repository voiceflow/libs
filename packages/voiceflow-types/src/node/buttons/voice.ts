import type { VoiceNode } from '@voiceflow/voice-types';
import type { Voice } from '@voiceflow-types/constants';

export interface VoiceStepData extends VoiceNode.Buttons.StepData<Voice> {}

export interface VoiceStep extends VoiceNode.Buttons.Step<VoiceStepData> {}
