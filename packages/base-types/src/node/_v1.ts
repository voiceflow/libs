import type { Nullable } from '@voiceflow/common';

import type { BaseEvent, BaseNode, BasePort, BasePortList, BaseStep, BaseStepPorts, NodeID } from './utils';

export const _V1_STOP_TYPES = 'stopTypes';

export interface StepData<Payload = unknown> {
  _v: 1;
  stop?: boolean;
  paths: { label: string }[];
  payload: Payload;
  defaultPath?: number;
}

export interface StepPort<Event = BaseEvent> extends BasePort {
  data: { event?: Event };
}

export interface StepPorts<Event> extends BaseStepPorts<Record<string, StepPort<Event>>, StepPort<Event>[]> {}

export interface Step<Payload = unknown, Event = BaseEvent>
  extends BaseStep<StepData<Payload>, StepPorts<Event>, BasePortList<StepPort<Event>>> {
  type: string;
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
