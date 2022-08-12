import { Nullable } from '@voiceflow/common';

import { BaseEvent, BaseNode, BaseStep, NodeID } from './utils';

export const _V1_STOP_TYPES = 'stopTypes';

export interface StepData<Payload = unknown> {
  _v: 1;
  stop?: boolean;
  paths: { label: string }[];
  payload: Payload;
  defaultPath?: number;
}

export interface Step<Payload = unknown> extends BaseStep<StepData<Payload>> {
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
