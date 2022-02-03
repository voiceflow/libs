import { BaseNode } from '@voiceflow/base-types';

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

export type AnyExtendedStep = Speak.Step | Prompt.Step | Capture.Step | CaptureV2.Step | Interaction.Step | Buttons.Step;
export type AnyExtendedNode = Speak.Node | Capture.Node | CaptureV2.Node | Interaction.Node;

export type AnyStep =
  | BaseNode.AnyCommonStep
  | AnyExtendedStep
  | BaseNode.Text.Step
  | BaseNode.Visual.Step
  | BaseNode.Stream.Step
  | BaseNode.Directive.Step;
export type AnyNode =
  | BaseNode.AnyCommonNode
  | AnyExtendedNode
  | BaseNode.Text.Node
  | BaseNode.Visual.Node
  | BaseNode.Stream.Node
  | BaseNode.Directive.Node;

export type AnyCommand = BaseNode.AnyCommonCommand;
