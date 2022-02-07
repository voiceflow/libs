import { VoiceNode } from '@voiceflow/voice-types';

import { Voice } from '@/constants';

export interface StepData extends VoiceNode.Speak.StepData<Voice> {}

export interface Step extends VoiceNode.Speak.Step<StepData> {}

export interface SpeakNode extends VoiceNode.Speak.SpeakNode {}

export interface RandomSpeakNode extends VoiceNode.Speak.RandomSpeakNode {}

export type Node = SpeakNode | RandomSpeakNode;
