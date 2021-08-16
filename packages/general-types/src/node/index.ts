import { Node } from '@voiceflow/base-types';

import * as Capture from './capture';
import * as Interaction from './interaction';
import * as Prompt from './prompt';
import * as Speak from './speak';

export * as Capture from './capture';
export * as Interaction from './interaction';
export * as Prompt from './prompt';
export * as Speak from './speak';

export type AnyGeneralExtendedStep = Speak.Step | Prompt.Step | Capture.Step | Interaction.Step;
export type AnyGeneralExtendedNode = Speak.Node | Capture.Node | Interaction.Node;

export type AnyGeneralStep = Node.AnyCommonStep | AnyGeneralExtendedStep | Node.Visual.Step | Node.Stream.Step | Node.Directive.Step;
export type AnyGeneralNode = Node.AnyCommonNode | AnyGeneralExtendedNode | Node.Visual.Node | Node.Stream.Node | Node.Directive.Node;

export type AnyGeneralCommand = Node.AnyCommonCommand;
