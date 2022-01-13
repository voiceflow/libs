import { Node } from '@voiceflow/base-types';

import { Prompt } from '@/types';

export interface StepData<Voice> extends Node.Speak.StepData, Node.Speak.StepDataDialog<Prompt<Voice>> {}

export interface Step<Data = StepData<unknown>> extends Node.Speak.Step<Data> {}

export interface SpeakNode extends Node.Speak.Node, Node.Speak.SpeakNode<string> {}

export interface RandomSpeakNode extends Node.Speak.Node, Node.Speak.RandomSpeakNode<string> {}

export type Node = SpeakNode | RandomSpeakNode;
