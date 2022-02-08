import { Voice } from '@google-types/constants';
import { BaseButton } from '@voiceflow/base-types';
import { VoiceNode } from '@voiceflow/voice-types';

export interface VoiceStepData extends VoiceNode.Prompt.StepData<Voice>, BaseButton.StepButton {}

export interface VoiceStep extends VoiceNode.Prompt.Step<VoiceStepData> {}
