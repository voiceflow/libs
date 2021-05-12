import * as AccountLinking from './accountLinking';
import * as CancelPayment from './cancelPayment';
import * as Capture from './capture';
import * as Card from './card';
import * as Command from './command';
import * as Directive from './directive';
import * as Display from './display';
import * as Event from './event';
import * as Intent from './intent';
import * as Interaction from './interaction';
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
  | Display.Step
  | Command.Step
  | Interaction.Step
  | Intent.Step
  | Capture.Step;

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
  | Display.Node
  | Interaction.Node
  | Capture.Node;

export type AlexaCommand = Event.Command | Command.Command | Intent.Command;
