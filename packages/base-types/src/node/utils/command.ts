import { Nullable } from '@voiceflow/api-sdk';

import { BaseCommand } from './base';
import { BaseEvent } from './event';

// BUILT IN COMMANDS
export enum CommandType {
  JUMP = 'jump',
  PUSH = 'push',
  TOPIC = 'topic',
}

export interface TypedBaseCommand<Event extends BaseEvent = BaseEvent> extends BaseCommand {
  type: CommandType;
  event: Event;
}

export interface JumpCommand<Event extends BaseEvent = BaseEvent> extends TypedBaseCommand<Event> {
  type: CommandType.JUMP;
  nextID: Nullable<string>;
}

export interface PushCommand<Event extends BaseEvent = BaseEvent> extends TypedBaseCommand<Event> {
  type: CommandType.PUSH;
  diagramID: Nullable<string>;
}

export interface TopicCommand<Event extends BaseEvent = BaseEvent> extends TypedBaseCommand<Event> {
  type: CommandType.TOPIC;
  nodeID: Nullable<string>;
  diagramID: Nullable<string>;
}

export type AnyCommand<Event extends BaseEvent = BaseEvent> = JumpCommand<Event> | PushCommand<Event> | TopicCommand<Event>;
