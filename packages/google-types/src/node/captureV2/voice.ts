import { VoiceNode } from '@voiceflow/voice-types';

import { Voice } from '@/constants';

export interface VoiceStepData extends VoiceNode.CaptureV2.StepData<Voice> {}

export interface VoiceStep extends VoiceNode.CaptureV2.Step<VoiceStepData> {}

export interface VoiceNode extends VoiceNode.CaptureV2.Node {}
