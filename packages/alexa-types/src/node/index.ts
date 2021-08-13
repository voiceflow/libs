import * as AccountLinking from './accountLinking';
import * as CancelPayment from './cancelPayment';
import * as Capture from './capture';
import * as Display from './display';
import * as Event from './event';
import * as Interaction from './interaction';
import * as Payment from './payment';
import * as Permission from './permission';
import * as Reminder from './reminder';
import * as Stream from './stream';
import * as UserInfo from './userInfo';

export type AlexaSteps =
  | AccountLinking.Step
  | Permission.Step
  | Reminder.Step
  | Stream.Step
  | UserInfo.Step
  | Event.Step
  | Payment.Step
  | CancelPayment.Step
  | Display.Step
  | Interaction.Step
  | Capture.Step;

export type AlexaNodes =
  | AccountLinking.Node
  | Permission.Node
  | Reminder.Node
  | Stream.Node
  | UserInfo.Node
  | Payment.Node
  | CancelPayment.Node
  | Display.Node
  | Interaction.Node
  | Capture.Node;

export type AlexaCommand = Event.Command;
