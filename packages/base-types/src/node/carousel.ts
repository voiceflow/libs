import { AnyRequestButton } from '@base-types/request';
import { SlateTextValue } from '@base-types/text';
import { Nullable } from '@voiceflow/common';

import { NodeType } from './constants';
import {
  BaseNode,
  BaseNoMatchNodeData,
  BaseNoMatchStepData,
  BaseNoReplyNodeData,
  BaseNoReplyStepData,
  BaseStep,
  BaseTraceFrame,
  DataID,
  NoMatchNoReplyStepPorts,
  TraceType,
} from './utils';

export enum CarouselLayout {
  CAROUSEL = 'Carousel',
  LIST = 'List',
}

export interface CarouselButton extends DataID {
  name: string;
  intent?: Nullable<string>;
}

export interface CarouselCard extends DataID {
  imageUrl: string | null;
  title: string;
  description: SlateTextValue;
  buttons: CarouselButton[];
}

export interface StepPorts extends NoMatchNoReplyStepPorts {}

export interface StepData extends BaseNoMatchStepData, BaseNoReplyStepData {
  layout: CarouselLayout;
  cards: CarouselCard[];
}

export interface Step<Data = StepData> extends BaseStep<Data, StepPorts> {
  type: NodeType.CAROUSEL;
}

export interface NodeCarouseCard {
  imageUrl: string | null;
  title: string;
  description: string;
  buttons: AnyRequestButton[];
}
export interface Node extends BaseNode, BaseNoReplyNodeData, BaseNoMatchNodeData {
  type: NodeType.CAROUSEL;
  cards: CarouselCard[];
  isBlocking: boolean;
}

export interface TraceFramePayload {
  cards: NodeCarouseCard[];
}

export interface TraceFrame extends BaseTraceFrame<TraceFramePayload> {
  type: TraceType.CAROUSEL;
}
