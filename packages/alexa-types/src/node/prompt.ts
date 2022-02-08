import { Voice } from '@alexa-types/constants';
import { VoiceNode } from '@voiceflow/voice-types';

export interface StepData extends VoiceNode.Prompt.StepData<Voice> {}

export interface Step extends VoiceNode.Prompt.Step<StepData> {}
