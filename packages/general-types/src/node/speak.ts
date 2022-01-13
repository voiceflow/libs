import { Node } from '@voiceflow/voice-types';

import { Voice } from '@/constants';

export interface StepData extends Node.Speak.StepData<Voice> {}

export interface Step extends Node.Speak.Step<StepData> {}

export interface SpeakNode extends Node.Speak.SpeakNode {}

export interface RandomSpeakNode extends Node.Speak.RandomSpeakNode {}

export type Node = SpeakNode | RandomSpeakNode;
