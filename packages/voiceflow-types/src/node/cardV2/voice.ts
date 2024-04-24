import type { VoiceNode } from '@voiceflow/voice-types';
import type { Voice } from '@voiceflow-types/constants';

export interface VoiceStepData extends VoiceNode.CardV2.StepData<Voice> {}

export interface VoiceStep extends VoiceNode.CardV2.Step<VoiceStepData> {}

export interface VoiceNode extends VoiceNode.CardV2.Node {}
