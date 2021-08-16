/* eslint-disable @typescript-eslint/no-empty-interface */

import { Node } from '@voiceflow/base-types';

import { Prompt } from '@/types';

export interface StepData<Voice> extends Node.Speak.StepData, Node.Speak.StepDataDialog<Prompt<Voice>[]> {}

export interface Step<Voice> extends Node.Speak.Step<StepData<Voice>> {}

export interface SpeakNode extends Node.Speak.Node, Node.Speak.SpeakNode<string> {}

export interface RandomSpeakNode extends Node.Speak.Node, Node.Speak.RandomSpeakNode<string> {}

export type Node = SpeakNode | RandomSpeakNode;
