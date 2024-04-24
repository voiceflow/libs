import type { BaseNode } from '@voiceflow/base-types';

import type * as AccountLinking from './accountLinking';
import type * as CancelPayment from './cancelPayment';
import type * as Capture from './capture';
import type * as CaptureV2 from './captureV2';
import type * as Display from './display';
import type * as Event from './event';
import type * as Interaction from './interaction';
import type * as Payment from './payment';
import type * as Permission from './permission';
import type * as Prompt from './prompt';
import type * as Reminder from './reminder';
import type * as Speak from './speak';
import type * as Stream from './stream';
import type * as UserInfo from './userInfo';

export * as AccountLinking from './accountLinking';
export * as CancelPayment from './cancelPayment';
export * as Capture from './capture';
export * as CaptureV2 from './captureV2';
export * from './constants';
export * as Display from './display';
export * as Event from './event';
export * as Interaction from './interaction';
export * as Payment from './payment';
export * as Permission from './permission';
export * as Prompt from './prompt';
export * as Reminder from './reminder';
export * as Speak from './speak';
export * as Stream from './stream';
export * as UserInfo from './userInfo';

export type AnyExtendedStep = Speak.Step | Prompt.Step | Capture.Step | CaptureV2.Step | Interaction.Step | Stream.Step;
export type AnyExtendedNode = Speak.Node | Capture.Node | CaptureV2.Node | Interaction.Node | Stream.Node;

export type AnyOnlyStep =
  | AccountLinking.Step
  | Permission.Step
  | Reminder.Step
  | UserInfo.Step
  | Event.Step
  | Payment.Step
  | CancelPayment.Step
  | Display.Step;
export type AnyOnlyNode =
  | AccountLinking.Node
  | Permission.Node
  | Reminder.Node
  | UserInfo.Node
  | Payment.Node
  | CancelPayment.Node
  | Display.Node;

export type AnyStep =
  | BaseNode.AnyCommonStep
  | AnyExtendedStep
  | AnyOnlyStep
  | BaseNode.Directive.Step
  | BaseNode.Card.Step;
export type AnyNode =
  | BaseNode.AnyCommonNode
  | AnyExtendedNode
  | AnyOnlyNode
  | BaseNode.Directive.Node
  | BaseNode.Card.Node;

export type AnyOnlyCommand = Event.Command;
export type AnyCommand = BaseNode.AnyCommonCommand | AnyOnlyCommand;
