import { Node } from '@voiceflow/base-types';

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

export type GeneralSteps = Exclude<Node.AnyBaseStep, OverloadedBaseSteps> | Speak.Step | Prompt.Step | Capture.Step | Interaction.Step;
export type GeneralNodes = Exclude<Node.AnyBaseNode, OverloadedBaseNodes> | Speak.Node | Capture.Node | Interaction.Node;
