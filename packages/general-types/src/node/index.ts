import { Node } from '@voiceflow/base-types';

import { Voice } from '@/constants';

import * as Capture from './capture';
import * as Interaction from './interaction';
import * as Prompt from './prompt';
import * as Speak from './speak';

export * as Capture from './capture';
export * as Interaction from './interaction';
export * as Prompt from './prompt';
export * as Speak from './speak';

type OverloadedBaseSteps = Node.Capture.Step | Node.Interaction.Step | Node.Prompt.Step | Node.Speak.Step;
type OverloadedBaseNodes = Node.Capture.Node | Node.Interaction.Node | Node.Speak.Node;

type BaseSteps = Exclude<Node.AnyBaseStep, OverloadedBaseSteps>;
type BaseNodes = Exclude<Node.AnyBaseNode, OverloadedBaseNodes>;

export type GeneralBaseSteps<V> = BaseSteps | Speak.Step<V> | Prompt.Step<V> | Capture.Step<V> | Interaction.Step<V>;
export type GeneralBaseNodes = BaseNodes | Speak.Node | Capture.Node | Interaction.Node;

export type GeneralSteps = GeneralBaseSteps<Voice>;
export type GeneralNodes = BaseNodes;
