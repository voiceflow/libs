import { Nullable } from '@voiceflow/common';

import { SlotMappings } from './mappings';

// BUILT IN EVENTS
export enum EventType {
  INTENT = 'intent',
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

export interface AlexaEvent extends BaseEvent {
  type: EventType.ALEXA;
  intent: string;
  mappings: Array<{ var: Nullable<string>; path: string }>;
}

export interface GeneralEvent extends BaseEvent {
  type: string; // general event type is dynamic, used to match request with the correct command
  name: string;
}

export type AnyEvent = IntentEvent | GeneralEvent;

export const isIntentEvent = (event: BaseEvent): event is IntentEvent => event.type === EventType.INTENT;

const ALL_EVENTS_TYPES = Object.values(EventType) as string[];

export const isGeneralEvent = (event: GeneralEvent): event is GeneralEvent => !ALL_EVENTS_TYPES.includes(event.type);
