import { Nullable } from '@voiceflow/common';

import { NodeType } from './constants';
import { BaseEvent, BaseNode, BasePort, BasePortList, BaseStep, BaseStepPorts, NodeID } from './utils';

interface StepData<Payload = unknown> {
  stop?: boolean;
  payload: Payload;
  defaultPath?: number;
}

export interface StepPort<Event = BaseEvent> extends BasePort {
  data: { event?: Event };
}

interface StepPorts<Event> extends BaseStepPorts<Record<string, StepPort<Event>>, StepPort<Event>[]> {}

export interface Step<Payload = unknown, Event = BaseEvent> extends BaseStep<StepData<Payload>, StepPorts<Event>, BasePortList<StepPort<Event>>> {
  type: NodeType.CHANNEL_ACTION;
}

interface NodePath<Event = BaseEvent> {
  label?: string;
  event?: Event;
  nextID: Nullable<NodeID>;
}

export interface Node<Event = BaseEvent> extends BaseNode {
  type: NodeType.CHANNEL_ACTION;
  data: {
    name: string;
    payload: unknown;
  };
  stop: boolean;
  defaultPath?: number; // index starting from 0
  paths: Array<NodePath<Event>>;
  platform?: string;
}
