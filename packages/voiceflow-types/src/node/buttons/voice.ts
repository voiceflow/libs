import { VoiceNode } from '@voiceflow/voice-types';
import { Voice } from '@voiceflow-types/constants';

export interface VoiceStepData extends VoiceNode.Buttons.StepData<Voice> {}

export interface VoiceStep extends VoiceNode.Buttons.Step<VoiceStepData> {}
