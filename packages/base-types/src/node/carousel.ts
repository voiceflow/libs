import { GeneralRequestButton } from '@base-types/request';
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

export interface CarouselCard<B = CarouselButton> extends DataID {
  imageUrl: string | null;
  title: string;
  description: SlateTextValue;
  buttons: B[];
}

export interface StepPorts extends NoMatchNoReplyStepPorts {}

export interface StepData extends BaseNoMatchStepData, BaseNoReplyStepData {
  layout: CarouselLayout;
  cards: CarouselCard[];
}

export interface Step<Data = StepData> extends BaseStep<Data, StepPorts> {
  type: NodeType.CAROUSEL;
}

export type NodeCarouselCard = CarouselCard<GeneralRequestButton>;
export interface Node extends BaseNode, BaseNoReplyNodeData, BaseNoMatchNodeData {
  type: NodeType.CAROUSEL;
  cards: NodeCarouselCard[];
  isBlocking: boolean;
}
export interface TraceCarouselCard extends Omit<NodeCarouselCard, 'description'> {
  description: string;
}

export interface TraceFramePayload {
  cards: TraceCarouselCard[];
}
export interface TraceFrame extends BaseTraceFrame<TraceFramePayload> {
  type: TraceType.CAROUSEL;
}
