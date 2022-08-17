import { BaseButton } from '@voiceflow/base-types';
import { VoiceNode } from '@voiceflow/voice-types';
import { Voice } from '@voiceflow-types/constants';

/** @deprecated */
export interface VoiceStepData extends VoiceNode.Capture.StepData<Voice>, BaseButton.StepButton {}

/** @deprecated */
export interface VoiceStep extends VoiceNode.Capture.Step<VoiceStepData> {}
