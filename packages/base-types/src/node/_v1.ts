import { Nullable } from '@/models/utils';

import { BaseEvent, BaseNode, BasePort, BaseStep, NodeID } from './utils';

// eslint-disable-next-line no-underscore-dangle
export const _V1_STOP_TYPES = 'stopTypes';

export interface StepData<Payload = unknown> {
  _v: 1;
  stop?: boolean;
  payload: Payload;
  defaultPath?: number;
}

export interface NodePath<Event = BaseEvent> {
  label?: string;
  event?: Event;
  nextID: Nullable<NodeID>;
}

export interface Node<Event = BaseEvent> extends BaseNode {
  _v: 1;
  stop: boolean;
  paths: Array<NodePath<Event>>;
  payload: unknown;
  defaultPath?: number; // index starting from 0
}
export interface Step<Payload = unknown, Event = BaseEvent> extends BaseStep<StepData<Payload>, BasePort<{ event?: Event }>[]> {
  type: string;
}
