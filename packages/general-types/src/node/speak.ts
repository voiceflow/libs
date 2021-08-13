/* eslint-disable @typescript-eslint/no-empty-interface */

import { Node } from '@voiceflow/base-types';

import { Voice } from '@/constants';
import { Prompt } from '@/types';

export interface StepData extends Node.Speak.StepData, Node.Speak.StepDataDialog<Prompt<Voice>[]> {}

export interface Step extends Node.Speak.Step<StepData> {}

export interface SpeakNode extends Node.Speak.Node, Node.Speak.SpeakNode<string> {}

export interface RandomSpeakNode extends Node.Speak.Node, Node.Speak.RandomSpeakNode<string> {}

export type Node = SpeakNode | RandomSpeakNode;
