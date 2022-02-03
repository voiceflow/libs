import { VoiceNode } from '@voiceflow/voice-types';

import { Voice } from '@/constants';

/** @deprecated */
export interface StepData extends VoiceNode.Capture.StepData<Voice> {}

/** @deprecated */
export interface Step extends VoiceNode.Capture.Step<StepData> {}

/** @deprecated */
export interface Node extends VoiceNode.Capture.Node {}
