import { SlotMappings } from './mappings';

// BUILT IN EVENTS
export enum EventType {
  INTENT = 'intent',
}

export interface BaseEvent {
  type: string;
}

/**
 * @deprecated use BaseEvent or IntentEvent instead
 */
export type Event<T extends string = string, D = unknown> = { type: T } & D;

export interface IntentEvent extends BaseEvent, SlotMappings {
  type: EventType;
  intent: string;
}
