import { BaseNode } from '@voiceflow/base-types';

import * as AccountLinking from './accountLinking';
import * as CancelPayment from './cancelPayment';
import * as Capture from './capture';
import * as CaptureV2 from './captureV2';
import * as Display from './display';
import * as Event from './event';
import * as Interaction from './interaction';
import * as Payment from './payment';
import * as Permission from './permission';
import * as Prompt from './prompt';
import * as Reminder from './reminder';
import * as Speak from './speak';
import * as Stream from './stream';
import * as UserInfo from './userInfo';

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
export type AnyOnlyNode = AccountLinking.Node | Permission.Node | Reminder.Node | UserInfo.Node | Payment.Node | CancelPayment.Node | Display.Node;

export type AnyStep = BaseNode.AnyCommonStep | AnyExtendedStep | AnyOnlyStep | BaseNode.Directive.Step | BaseNode.Card.Step;
export type AnyNode = BaseNode.AnyCommonNode | AnyExtendedNode | AnyOnlyNode | BaseNode.Directive.Node | BaseNode.Card.Node;

export type AnyOnlyCommand = Event.Command;
export type AnyCommand = BaseNode.AnyCommonCommand | AnyOnlyCommand;
