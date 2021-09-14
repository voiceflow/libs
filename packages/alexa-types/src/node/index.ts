import { Node } from '@voiceflow/base-types';

import * as AccountLinking from './accountLinking';
import * as CancelPayment from './cancelPayment';
import * as Capture from './capture';
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

export type AnyAlexaExtendedStep = Speak.Step | Prompt.Step | Capture.Step | Interaction.Step | Stream.Step;
export type AnyAlexaExtendedNode = Speak.Node | Capture.Node | Interaction.Node | Stream.Node;

export type AnyAlexaOnlyStep =
  | AccountLinking.Step
  | Permission.Step
  | Reminder.Step
  | UserInfo.Step
  | Event.Step
  | Payment.Step
  | CancelPayment.Step
  | Display.Step;
export type AnyAlexaOnlyNode =
  | AccountLinking.Node
  | Permission.Node
  | Reminder.Node
  | UserInfo.Node
  | Payment.Node
  | CancelPayment.Node
  | Display.Node;

export type AnyAlexaStep = Node.AnyCommonStep | AnyAlexaExtendedStep | AnyAlexaOnlyStep | Node.Directive.Step | Node.Card.Step;
export type AnyAlexaNode = Node.AnyCommonNode | AnyAlexaExtendedNode | AnyAlexaOnlyNode | Node.Directive.Node | Node.Card.Node;

export type AnyAlexaOnlyCommand = Event.Command;
export type AnyAlexaCommand = Node.AnyCommonCommand | AnyAlexaOnlyCommand;
