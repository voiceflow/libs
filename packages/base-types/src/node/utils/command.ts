import type { Nullable } from "@voiceflow/common";

import type { BaseCommand } from "./base";
import { isBaseEvent, type BaseEvent } from "./event";

// BUILT IN COMMANDS
export enum CommandType {
  JUMP = "jump",
  PUSH = "push",
}

export interface TypedBaseCommand
  extends BaseCommand {
  type: CommandType;
}

export interface WithEventMatching<Event extends BaseEvent = BaseEvent> {
  event: Event;
}

export interface WithSiftOnMatching {
  on: Record<string, unknown>; // npm package `sift` query object
}

export interface WithJump extends TypedBaseCommand {
  type: CommandType.JUMP;
  nextID: Nullable<string>;
  diagramID?: Nullable<string>;
  platform?: string;
}

export interface WithPush extends TypedBaseCommand {
  type: CommandType.PUSH;
  diagramID: Nullable<string>;
  platform?: string;
}

export interface JumpEventMatchedCommand<Event extends BaseEvent = BaseEvent>
  extends WithJump, WithEventMatching<Event> {}

export interface PushEventMatchedCommand<Event extends BaseEvent = BaseEvent>
  extends WithPush, WithEventMatching<Event> {}

export interface JumpOnMatchedCommand
  extends WithJump, WithSiftOnMatching {}

export interface PushOnMatchedCommand
  extends WithPush, WithSiftOnMatching {}

export type EventMatchedCommand<Event extends BaseEvent = BaseEvent> =
  | JumpEventMatchedCommand<Event>
  | PushEventMatchedCommand<Event>;

export type OnMatchedCommand =
  | JumpOnMatchedCommand
  | PushOnMatchedCommand;

export type AnyCommand<Event extends BaseEvent = BaseEvent> =
  | EventMatchedCommand<Event>
  | OnMatchedCommand;

export const isWithJump = (command: BaseCommand): command is WithJump => 
    command.type === CommandType.JUMP;

export const isWithPush = (command: BaseCommand): command is WithPush => 
    command.type === CommandType.PUSH;

export const isWithEventMatching = <TEvent extends BaseEvent = BaseEvent>(command: BaseCommand): command is EventMatchedCommand<TEvent> => 
    'event' in command && isBaseEvent(command.event);

export const isWithOnMatching = (command: BaseCommand): command is OnMatchedCommand => 
    'on' in command && typeof command.on === 'object' && command.on !== null;

export const isJumpEventMatchedCommand = <Event extends BaseEvent = BaseEvent>(
  command: BaseCommand,
): command is JumpEventMatchedCommand<Event> =>
  isWithJump(command) && isWithEventMatching(command);

export const isPushEventMatchedCommand = <Event extends BaseEvent = BaseEvent>(
  command: BaseCommand,
): command is JumpEventMatchedCommand<Event> =>
  isWithPush(command) && isWithEventMatching(command);

export const isJumpOnMatchedCommand = <Event extends BaseEvent = BaseEvent>(
  command: BaseCommand,
): command is JumpEventMatchedCommand<Event> =>
  isWithJump(command) && isWithOnMatching(command);

export const isPushOnMatchedCommand = <Event extends BaseEvent = BaseEvent>(
  command: BaseCommand,
): command is JumpEventMatchedCommand<Event> =>
  isWithPush(command) && isWithOnMatching(command);
