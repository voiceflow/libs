import { StepButtons } from '@/button';
import { AnyRequestButton, NodeButtons } from '@/request';

import { NodeType } from './constants';
import { BaseEvent, BaseNode, BaseNodeNoMatch, BaseStep, BaseStepNoMatch, BaseTraceFrame, NodeNextID, SlotMappings, TraceType } from './utils';

export interface Choice extends SlotMappings {
  intent: string;
}

export interface StepData extends StepButtons {
  name: string;
  else: BaseStepNoMatch;
  choices: Choice[];
}

export interface Step<D extends StepData = StepData> extends BaseStep<D> {
  type: NodeType.INTERACTION;
}

export interface NodeInteraction<E = BaseEvent> extends NodeNextID {
  event: E;
}

export interface Node<E = BaseEvent> extends BaseNode, NodeButtons, BaseNodeNoMatch {
  type: NodeType.INTERACTION;
  interactions: NodeInteraction<E>[];
}

export interface TraceFramePayload {
  buttons: AnyRequestButton[];
}

export interface TraceFrame extends BaseTraceFrame<TraceFramePayload> {
  type: TraceType.CHOICE;
}
