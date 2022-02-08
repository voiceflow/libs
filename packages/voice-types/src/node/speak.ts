import { Prompt } from '@voice-types/models';
import { BaseNode } from '@voiceflow/base-types';

export interface StepData<Voice> extends BaseNode.Speak.StepData, BaseNode.Speak.StepDataDialog<Prompt<Voice>> {}

export interface Step<Data = StepData<unknown>> extends BaseNode.Speak.Step<Data> {}

export interface SpeakNode extends BaseNode.Speak.Node, BaseNode.Speak.SpeakNode<string> {}

export interface RandomSpeakNode extends BaseNode.Speak.Node, BaseNode.Speak.RandomSpeakNode<string> {}

export type Node = SpeakNode | RandomSpeakNode;
