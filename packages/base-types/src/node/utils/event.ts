import type { Nullable } from '@voiceflow/common';

import type { SlotMappings } from './mappings';

// BUILT IN EVENTS
export enum EventType {
  INTENT = 'intent',
  EVENT = 'event',
  ALEXA = 'alexa',
}

export interface BaseEvent {
  type: string;
}

/**
 * @deprecated use BaseEvent or IntentEvent instead
 */
export type Event<T extends string = string, D = unknown> = { type: T } & D;

export interface IntentEvent extends BaseEvent, SlotMappings {
  type: EventType.INTENT;
  intent: string;
}

export interface EventEvent extends BaseEvent {
  type: EventType.EVENT;
  event: string;
}

export interface AlexaEvent extends BaseEvent {
  type: EventType.ALEXA;
  intent: string;
  mappings: Array<{ var: Nullable<string>; path: string }>;
}

export interface GeneralEvent extends BaseEvent {
  type: string; // general event type is dynamic, used to match request with the correct command
  name: string;
}

export type AnyEvent = IntentEvent | GeneralEvent | EventEvent;

const ALL_EVENTS_TYPES = Object.values(EventType) as string[];

export const isBaseEvent = (event: unknown): event is BaseEvent => 
    typeof event === 'object' &&
    event !== null &&
    'type' in event &&
    typeof event.type === 'string';

export const isIntentEvent = (event: BaseEvent): event is IntentEvent => event.type === EventType.INTENT;

export const isEventEvent = (event: BaseEvent): event is EventEvent => event.type === EventType.EVENT;

export const isGeneralEvent = (event: GeneralEvent): event is GeneralEvent => !ALL_EVENTS_TYPES.includes(event.type);
