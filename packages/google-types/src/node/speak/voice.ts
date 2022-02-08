import { Voice } from '@google-types/constants';
import { VoiceNode } from '@voiceflow/voice-types';

export interface VoiceStepData extends VoiceNode.Speak.StepData<Voice> {}

export interface VoiceStep extends VoiceNode.Speak.Step<VoiceStepData> {}

export interface VoiceSpeakNode extends VoiceNode.Speak.SpeakNode {}

export interface VoiceRandomSpeakNode extends VoiceNode.Speak.RandomSpeakNode {}

export type VoiceNode = VoiceSpeakNode | VoiceRandomSpeakNode;
