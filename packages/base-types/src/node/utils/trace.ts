import { BaseEvent } from './event';

export enum TraceType {
  END = 'end',
  TEXT = 'text',
  PATH = 'path',
  FLOW = 'flow',
  SPEAK = 'speak',
  BLOCK = 'block',
  DEBUG = 'debug',
  CHOICE = 'choice',
  STREAM = 'stream',
  VISUAL = 'visual',
}

export interface BaseTraceFramePath<E extends BaseEvent = BaseEvent> {
  event: E;
}

export interface BaseTraceFrame<P = any, F extends BaseTraceFramePath = BaseTraceFramePath> {
  type: string;
  paths?: F[];
  payload: P;
  defaultPath?: number;
}
