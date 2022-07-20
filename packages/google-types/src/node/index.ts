import { BaseNode } from '@voiceflow/base-types';

import * as Buttons from './buttons';
import * as Capture from './capture';
import * as CaptureV2 from './captureV2';
import * as Carousel from './carousel';
import * as Interaction from './interaction';
import * as Prompt from './prompt';
import * as Speak from './speak';
import * as Stream from './stream';

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

export type AnyExtendedNode = Speak.Node | Capture.Node | CaptureV2.Node | Interaction.Node | Stream.Node | Carousel.Node;

export type AnyStep = BaseNode.AnyCommonStep | AnyExtendedStep | BaseNode.Card.Step;
export type AnyNode = BaseNode.AnyCommonNode | AnyExtendedNode | BaseNode.Card.Node;

export type AnyCommand = BaseNode.AnyCommonCommand;
