import { SlateTextValue } from '@base-types/text';
import { Nullable } from '@base-types/types';

import { NodeType } from './constants';
import {
  BaseNode,
  BaseNoMatchNodeData,
  BaseNoMatchStepData,
  BaseNoReplyNodeData,
  BaseNoReplyStepData,
  BaseStep,
  DataID,
  NoMatchNoReplyStepPorts,
} from './utils';

export enum CardLayout {
  CAROUSEL = 'Carousel',
  LIST = 'List',
}

export interface CardButton extends DataID {
  name: string;
  intent?: Nullable<string>;
}

export interface Card extends DataID {
  imageUrl: string | null;
  title: string;
  description: SlateTextValue;
  buttons: CardButton[];
}

export interface StepPorts extends NoMatchNoReplyStepPorts {}

export interface StepData extends BaseNoMatchStepData, BaseNoReplyStepData {
  layout: CardLayout;
  cards: Card[];
}

export interface Step<Data = StepData> extends BaseStep<Data> {
  type: NodeType.CARDV2;
}

export interface Node extends BaseNode, BaseNoReplyNodeData, BaseNoMatchNodeData {
  type: NodeType.CARDV2;
  cards: Card[];
}
