import type { Nullable } from '@voiceflow/common';

import type { BaseCommand } from './base';
import type { BaseEvent } from './event';

// BUILT IN COMMANDS
export enum CommandType {
  JUMP = 'jump',
  PUSH = 'push',
}

export interface TypedBaseCommand<Event extends BaseEvent = BaseEvent> extends BaseCommand {
  type: CommandType;
  event: Event;
}

export interface JumpCommand<Event extends BaseEvent = BaseEvent> extends TypedBaseCommand<Event> {
  type: CommandType.JUMP;
  nextID: Nullable<string>;
  diagramID?: Nullable<string>;
  platform?: string;
}

export interface PushCommand<Event extends BaseEvent = BaseEvent> extends TypedBaseCommand<Event> {
  type: CommandType.PUSH;
  diagramID: Nullable<string>;
  platform?: string;
}

export type AnyCommand<Event extends BaseEvent = BaseEvent> = JumpCommand<Event> | PushCommand<Event>;
