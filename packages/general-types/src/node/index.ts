import { Node } from '@voiceflow/base-types';

import * as Buttons from './buttons';
import * as Capture from './capture';
import * as CaptureV2 from './captureV2';
import * as Interaction from './interaction';
import * as Prompt from './prompt';
import * as Speak from './speak';

export * as Buttons from './buttons';
export * as Capture from './capture';
export * as CaptureV2 from './captureV2';
export * as Interaction from './interaction';
export * as Prompt from './prompt';
export * as Speak from './speak';

export type AnyGeneralExtendedStep = Speak.Step | Prompt.Step | Capture.Step | CaptureV2.Step | Interaction.Step | Buttons.Step;
export type AnyGeneralExtendedNode = Speak.Node | Capture.Node | CaptureV2.Node | Interaction.Node;

export type AnyGeneralStep = Node.AnyCommonStep | AnyGeneralExtendedStep | Node.Visual.Step | Node.Stream.Step | Node.Directive.Step;
export type AnyGeneralNode = Node.AnyCommonNode | AnyGeneralExtendedNode | Node.Visual.Node | Node.Stream.Node | Node.Directive.Node;

export type AnyGeneralCommand = Node.AnyCommonCommand;
