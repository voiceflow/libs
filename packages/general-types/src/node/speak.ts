/* eslint-disable @typescript-eslint/no-empty-interface */

import { Node } from '@voiceflow/base-types';

import { Prompt } from '@/types';

export interface StepData<V> extends Node.Speak.StepData, Node.Speak.StepDataDialog<Prompt<V>[]> {}

export interface Step<V> extends Node.Speak.Step<StepData<V>> {}

export interface SpeakNode extends Node.Speak.Node, Node.Speak.SpeakNode<string> {}

export interface RandomSpeakNode extends Node.Speak.Node, Node.Speak.RandomSpeakNode<string> {}

export type Node = SpeakNode | RandomSpeakNode;
