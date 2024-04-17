import type { BaseNode } from '@voiceflow/base-types';

import type * as Buttons from './buttons';
import type * as Capture from './capture';
import type * as CaptureV2 from './captureV2';
import type * as CardV2 from './cardV2';
import type * as Carousel from './carousel';
import type * as Interaction from './interaction';
import type * as Prompt from './prompt';
import type * as Speak from './speak';

export * as Buttons from './buttons';
export * as Capture from './capture';
export * as CaptureV2 from './captureV2';
export * as CardV2 from './cardV2';
export * as Carousel from './carousel';
export * as Interaction from './interaction';
export * as Prompt from './prompt';
export * as Speak from './speak';
export * as Utils from './utils';

export type AnyExtendedStep =
  | Speak.Step
  | Prompt.Step
  | Capture.Step
  | CaptureV2.Step
  | Interaction.Step
  | Buttons.Step
  | Carousel.Step
  | CardV2.Step;
export type AnyExtendedNode =
  | Speak.Node
  | Capture.Node
  | CaptureV2.Node
  | Interaction.Node
  | Carousel.Node
  | CardV2.Node;

export type AnyStep =
  | BaseNode.AnyCommonStep
  | AnyExtendedStep
  | BaseNode.Text.Step
  | BaseNode.Visual.Step
  | BaseNode.Card.Step
  | BaseNode.Stream.Step
  | BaseNode.Directive.Step;
export type AnyNode =
  | BaseNode.AnyCommonNode
  | AnyExtendedNode
  | BaseNode.Text.Node
  | BaseNode.Visual.Node
  | BaseNode.Card.Node
  | BaseNode.Stream.Node
  | BaseNode.Directive.Node;

export type AnyCommand = BaseNode.AnyCommonCommand;
