import { Nullable } from '@voiceflow/api-sdk';

import { BaseCommand } from './base';
import { BaseEvent } from './event';

// BUILT IN COMMANDS
export enum CommandType {
  JUMP = 'jump',
  PUSH = 'push',
}

export interface TypedBaseCommand<E extends BaseEvent = BaseEvent> extends BaseCommand {
  type: CommandType;
  event: E;
}

export interface JumpCommand<E extends BaseEvent = BaseEvent> extends TypedBaseCommand<E> {
  type: CommandType.JUMP;
  nextID: Nullable<string>;
}

export interface PushCommand<E extends BaseEvent = BaseEvent> extends TypedBaseCommand<E> {
  type: CommandType.PUSH;
  diagramID: Nullable<string>;
}

export type AnyCommand<E extends BaseEvent = BaseEvent> = JumpCommand<E> | PushCommand<E>;
