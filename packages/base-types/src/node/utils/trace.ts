import { BaseEvent } from './event';

export enum TraceType {
  LOG = 'log',
  END = 'end',
  TEXT = 'text',
  PATH = 'path',
  FLOW = 'flow',
  GOTO = 'goto',
  SPEAK = 'speak',
  BLOCK = 'block',
  DEBUG = 'debug',
  JSON = 'json',
  CHOICE = 'choice',
  STREAM = 'stream',
  VIDEO = 'video',
  VISUAL = 'visual',
  CARD_V2 = 'cardV2',
  CAROUSEL = 'carousel',
  NO_REPLY = 'no-reply',
  ENTITY_FILLING = 'entity-filling',
  CHANNEL_ACTION = 'channel-action',
}

export interface BaseTraceFramePath<Event extends BaseEvent = BaseEvent> {
  label?: string;
  event: Event;
}

export interface BaseTraceFrame<Payload = any, TracePath extends BaseTraceFramePath = BaseTraceFramePath> {
  type: string;
  paths?: TracePath[];
  payload: Payload;
  defaultPath?: number;
  style?: {
    delay?: number;
  };
}

export interface BaseResponseTrace {
  ai?: boolean;
  message: string;
}
