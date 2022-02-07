import { VoiceNode } from '@voiceflow/voice-types';

import { Voice } from '@/constants';

export interface StepData extends VoiceNode.CaptureV2.StepData<Voice> {}

export interface Step extends VoiceNode.CaptureV2.Step<StepData> {}

export interface Node extends VoiceNode.CaptureV2.Node {}
