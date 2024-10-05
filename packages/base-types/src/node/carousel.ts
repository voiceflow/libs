import type { ActionRequestButton, GeneralRequestButton } from '@base-types/request';
import type { SlateTextValue } from '@base-types/text';
import type { Nullable } from '@voiceflow/common';

import type { NodeType } from './constants';
import type {
  BaseNode,
  BaseNoMatchNodeData,
  BaseNoMatchStepData,
  BaseNoReplyNodeData,
  BaseNoReplyStepData,
  BaseStep,
  BaseStepPorts,
  BuiltInNextPort,
  BuiltInNoMatchNoReplyPorts,
  DataID,
  NodeNextID,
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
