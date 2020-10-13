import * as AccountLinking from './accountLinking';
import * as CancelPayment from './cancelPayment';
import * as Card from './card';
import * as Directive from './directive';
import * as Display from './display';
import * as Event from './event';
import * as Payment from './payment';
import * as Permission from './permission';
import * as Reminder from './reminder';
import * as Stream from './stream';
import * as UserInfo from './userInfo';

export * from './types';

export type AlexaSteps =
  | Card.Step
  | AccountLinking.Step
  | Permission.Step
  | Reminder.Step
  | Stream.Step
  | Directive.Step
  | UserInfo.Step
  | Event.Step
  | Payment.Step
  | CancelPayment.Step
  | Display.Step;

export type AlexaNodes =
  | Card.Node
  | AccountLinking.Node
  | Permission.Node
  | Reminder.Node
  | Stream.Node
  | Directive.Node
  | UserInfo.Node
  | Payment.Node
  | CancelPayment.Node
  | Display.Node;

export type AlexaCommands = Event.Command;
