import { Nullable } from '@voiceflow/api-sdk';

import { BaseEvent, BaseNode, BasePort, BaseStep, NodeID } from './utils';

// eslint-disable-next-line no-underscore-dangle
export const _V1_STOP_TYPES = 'stopTypes';

export interface StepData<B = unknown> {
  _v: 1;
  payload: B;
  stop?: boolean;
  defaultPath?: number;
}

export interface Node<E = BaseEvent> extends BaseNode {
  _v: 1;
  payload: unknown;
  stop: boolean;
  defaultPath?: number; // index starting from 0
  paths: Array<{ event?: E; nextID: Nullable<NodeID> }>;
}
export interface Step<B = unknown, E = BaseEvent> extends BaseStep<StepData<B>, BasePort<{ event?: E }>[]> {
  type: string;
}
