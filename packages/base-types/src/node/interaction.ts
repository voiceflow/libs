import { PortType } from '@base-types/models';
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
  BasePort,
  BasePortList,
  BaseStep,
  BaseStepNoMatch,
  BaseStepPorts,
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

export type StepPorts = BaseStepPorts<{ [PortType.NEXT]: BasePort; [PortType.NO_MATCH]?: BasePort; [PortType.NO_REPLY]?: BasePort }, BasePort[]>;

export interface Step<Data = StepData> extends BaseStep<Data, BasePortList, StepPorts> {
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
