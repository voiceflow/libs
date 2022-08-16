import { BaseButton } from '@voiceflow/base-types';
import { VoiceNode } from '@voiceflow/voice-types';
import { Voice } from '@voiceflow-types/constants';

export interface VoiceStepData extends VoiceNode.CaptureV2.StepData<Voice>, BaseButton.StepButton {}

export interface VoiceStep extends VoiceNode.CaptureV2.Step<VoiceStepData> {}
