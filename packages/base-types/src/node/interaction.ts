import { AnyRequestButton } from '@base-types/request';
import { Nullable } from '@base-types/types';

import { NodeType } from './constants';
import {
  BaseEvent,
  BaseNode,
  BaseNoMatchNodeData,
  BaseNoMatchStepData,
  BaseNoReplyNodeData,
  BaseNoReplyStepData,
  BaseStep,
  BaseStepNoMatch,
  BaseTraceFrame,
  DeprecatedBaseNodeNoMatch,
  NodeIntentScope,
  NodeNextID,
  SlotMappings,
  StepIntentScope,
  TraceType,
} from './utils';

export enum ChoiceAction {
  PATH = 'PATH',
  GO_TO = 'GO_TO',
}

export interface ChoiceGoTo {
  intentID: Nullable<string>;
  diagramID?: Nullable<string>;
}

export interface Choice extends SlotMappings {
  goTo?: ChoiceGoTo;
  intent: string;
  action?: ChoiceAction;
}

export interface StepData extends BaseNoReplyStepData, StepIntentScope, BaseNoMatchStepData {
  name: string;
  choices: Choice[];

  /**
   * @deprecated use noMatch instead
   */
  else?: BaseStepNoMatch;
}

export interface Step<Data = StepData> extends BaseStep<Data> {
  type: NodeType.INTERACTION;
}

export interface NodeInteraction<Event = BaseEvent> extends NodeNextID {
  event: Event;
}

export interface Node<Event = BaseEvent> extends BaseNode, DeprecatedBaseNodeNoMatch, BaseNoReplyNodeData, NodeIntentScope, BaseNoMatchNodeData {
  type: NodeType.INTERACTION;
  interactions: NodeInteraction<Event>[];
}

export interface TraceFramePayload {
  buttons: AnyRequestButton[];
}

export interface TraceFrame extends BaseTraceFrame<TraceFramePayload> {
  type: TraceType.CHOICE;
}
