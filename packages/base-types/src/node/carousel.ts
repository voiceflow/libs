import { ActionRequestButton, GeneralRequestButton } from '@base-types/request';
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
  BaseStepPorts,
  BaseTraceFrame,
  BuiltInNextPort,
  BuiltInNoMatchNoReplyPorts,
  DataID,
  NodeNextID,
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

export interface StepBuiltInPorts extends BuiltInNextPort, BuiltInNoMatchNoReplyPorts {}

export interface StepPorts extends BaseStepPorts<StepBuiltInPorts, []> {}

export interface StepData extends BaseNoMatchStepData, BaseNoReplyStepData {
  layout: CarouselLayout;
  cards: CarouselCard[];
}

export interface Step<Data = StepData> extends BaseStep<Data, StepPorts> {
  type: NodeType.CAROUSEL;
}

export type NodeCarouselCard = CarouselCard<GeneralRequestButton | ActionRequestButton>;

export interface Node extends BaseNode, NodeNextID, BaseNoReplyNodeData, BaseNoMatchNodeData {
  type: NodeType.CAROUSEL;
  cards: NodeCarouselCard[];
  layout: CarouselLayout;
  isBlocking: boolean;
  platform?: string;
}

export interface TraceCarouselCardDescription {
  slate?: SlateTextValue;
  text: string;
}
export interface TraceCarouselCard extends Omit<NodeCarouselCard, 'description'> {
  description: TraceCarouselCardDescription;
}

export interface TraceFramePayload {
  cards: TraceCarouselCard[];
  layout: CarouselLayout;
}
export interface TraceFrame extends BaseTraceFrame<TraceFramePayload> {
  type: TraceType.CAROUSEL;
}
