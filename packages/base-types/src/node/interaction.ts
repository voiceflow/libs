import { AnyRequestButton } from '@/request';

import { NodeType } from './constants';
import { BaseEvent, BaseNode, BaseNodeNoMatch, BaseStep, BaseStepNoMatch, BaseTraceFrame, NodeNextID, SlotMappings, TraceType } from './utils';

export enum ChoiceAction {
  PATH = 'PATH',
  INTENT = 'INTENT',
}

export interface Choice extends SlotMappings {
  intent: string;
  action?: ChoiceAction;
  goToIntent?: string;
}

export interface StepData {
  name: string;
  else: BaseStepNoMatch;
  choices: Choice[];
}

export interface Step<Data = StepData> extends BaseStep<Data> {
  type: NodeType.INTERACTION;
}

export interface NodeInteraction<Event = BaseEvent> extends NodeNextID {
  event: Event;
}

export interface Node<Event = BaseEvent> extends BaseNode, BaseNodeNoMatch {
  type: NodeType.INTERACTION;
  interactions: NodeInteraction<Event>[];
}

export interface TraceFramePayload {
  buttons: AnyRequestButton[];
}

export interface TraceFrame extends BaseTraceFrame<TraceFramePayload> {
  type: TraceType.CHOICE;
}
