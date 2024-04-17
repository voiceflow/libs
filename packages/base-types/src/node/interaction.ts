import type { AnyRequestButton } from '@base-types/request';
import type { Nullable } from '@voiceflow/common';

import type { NodeType } from './constants';
import type {
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
  NoMatchNoReplyStepPorts,
  SlotMappings,
  StepIntentScope,
  TraceType,
} from './utils';

/**
 * @deprecated use `actions` instead
 */
export enum ChoiceAction {
  PATH = 'PATH',
  GO_TO = 'GO_TO',
}

/**
 * @deprecated use `actions` instead
 */
export interface ChoiceGoTo {
  intentID: Nullable<string>;
  diagramID?: Nullable<string>;
}

export interface Choice extends SlotMappings {
  intent: string;

  /**
   * @deprecated use `actions` instead
   */
  goTo?: ChoiceGoTo;
  /**
   * @deprecated use `actions` instead
   */
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

export interface StepPorts extends NoMatchNoReplyStepPorts {}

export interface Step<Data = StepData> extends BaseStep<Data, StepPorts> {
  type: NodeType.INTERACTION;
}

export interface NodeInteraction<Event = BaseEvent> extends NodeNextID {
  event: Event;
}

export interface Node<Event = BaseEvent>
  extends BaseNode,
    DeprecatedBaseNodeNoMatch,
    BaseNoReplyNodeData,
    NodeIntentScope,
    BaseNoMatchNodeData {
  type: NodeType.INTERACTION;
  interactions: NodeInteraction<Event>[];
  platform?: string;
}

export interface TraceFramePayload {
  buttons: AnyRequestButton[];
}

export interface TraceFrame extends BaseTraceFrame<TraceFramePayload> {
  type: TraceType.CHOICE;
}
