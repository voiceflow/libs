import type { BaseNode } from '@voiceflow/base-types';

import type * as Buttons from './buttons';
import type * as Capture from './capture';
import type * as CaptureV2 from './captureV2';
import type * as Carousel from './carousel';
import type * as Interaction from './interaction';
import type * as Prompt from './prompt';
import type * as Speak from './speak';
import type * as Stream from './stream';

export * as Buttons from './buttons';
export * as Capture from './capture';
export * as CaptureV2 from './captureV2';
export * as Carousel from './carousel';
export * as Interaction from './interaction';
export * as Prompt from './prompt';
export * as Speak from './speak';
export * as Stream from './stream';

export type AnyExtendedStep =
  | Speak.Step
  | Prompt.Step
  | Capture.Step
  | CaptureV2.Step
  | Interaction.Step
  | Stream.Step
  | Buttons.Step
  | Carousel.Step;

export type AnyExtendedNode =
  | Speak.Node
  | Capture.Node
  | CaptureV2.Node
  | Interaction.Node
  | Stream.Node
  | Carousel.Node;

export type AnyStep = BaseNode.AnyCommonStep | AnyExtendedStep | BaseNode.Card.Step;
export type AnyNode = BaseNode.AnyCommonNode | AnyExtendedNode | BaseNode.Card.Node;

export type AnyCommand = BaseNode.AnyCommonCommand;
