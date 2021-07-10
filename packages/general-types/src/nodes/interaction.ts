import { Nullable } from '@voiceflow/api-sdk';

import { AnyRequestButton } from '@/request';
import { NoMatches } from '@/types';

import {
  BaseEvent,
  BaseNode,
  BaseStep,
  BaseTraceFrame,
  DataWithMappings,
  NodeType,
  NodeWithButtons,
  NodeWithNoMatches,
  NodeWithReprompt,
  StepDataWithButtons,
  StepDataWithReprompt,
  TraceType,
} from './types';

export interface Choice extends DataWithMappings {
  intent: string;
}

export interface StepData<V> extends StepDataWithButtons, StepDataWithReprompt<V> {
  name: string;
  else: NoMatches<V>;
  choices: Choice[];
}

export interface NodeInteraction<E = BaseEvent> {
  event: E;
  nextId: Nullable<string>;
}

export interface Step<V> extends BaseStep<StepData<V>> {
  type: NodeType.INTERACTION;
}

export interface Node<E = BaseEvent> extends BaseNode, NodeWithButtons, NodeWithReprompt, NodeWithNoMatches {
  type: NodeType.INTERACTION;
  interactions: NodeInteraction<E>[];
}

export interface TraceFramePayload {
  buttons: AnyRequestButton[];
}

export interface TraceFrame extends BaseTraceFrame<TraceFramePayload> {
  type: TraceType.CHOICE;
}
