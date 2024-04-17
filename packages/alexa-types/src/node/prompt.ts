import type { Voice } from '@alexa-types/constants';
import type { VoiceNode } from '@voiceflow/voice-types';

export interface StepData extends VoiceNode.Prompt.StepData<Voice> {}

export interface Step extends VoiceNode.Prompt.Step<StepData> {}
