import { VoiceNode } from '@voiceflow/voice-types';

import { Voice } from '@/constants';

export interface StepData extends VoiceNode.Prompt.StepData<Voice> {}

export interface Step extends VoiceNode.Prompt.Step<StepData> {}
