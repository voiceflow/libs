import { Nullable } from '@voiceflow/common';

import { NodeType } from './constants';
import { BaseEvent, BaseNode, BasePort, BasePortList, BaseStep, BaseStepPorts, NodeID } from './utils';

export interface StepData<Payload = unknown> {
  stop?: boolean;
  payload: Payload;
  defaultPath?: number;
}

export interface StepPort<Event = BaseEvent> extends BasePort {
  data: { event?: Event };
}

export interface StepPorts<Event> extends BaseStepPorts<Record<string, StepPort<Event>>, StepPort<Event>[]> {}

export interface Step<Payload = unknown, Event = BaseEvent> extends BaseStep<StepData<Payload>, StepPorts<Event>, BasePortList<StepPort<Event>>> {
  type: NodeType.CUSTOM;
}

export interface NodePath<Event = BaseEvent> {
  label?: string;
  event?: Event;
  nextID: Nullable<NodeID>;
}

export interface NodePayload {
  name: string,
  body: unknown
}

export interface Node<Event = BaseEvent> extends BaseNode {
  stop: boolean;
  paths: Array<NodePath<Event>>;
  payload: NodePayload;
  defaultPath?: number; // index starting from 0
}
