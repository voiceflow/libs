import { NodeType } from './constants';
import { BaseNode, BaseStep, BaseTraceFrame, NodeNextID, TraceType } from './utils';

export enum CardType {
  SIMPLE = 'Simple',
  STANDARD = 'Standard',
}

export interface CardImage {
  largeImageUrl?: string;
  smallImageUrl?: string;
}

export interface Card {
  type: CardType;
  title: string;
  text: string;
  image?: CardImage;
}

export interface StepData extends Card {}

export interface Step<Data = StepData> extends BaseStep<Data> {
  type: NodeType.CARD;
}

export interface Node extends BaseNode, NodeNextID {
  type: NodeType.CARD;
  card: Card;
}

export interface TraceFramePayload extends Card {}
export interface TraceFrame extends BaseTraceFrame<TraceFramePayload> {
  type: TraceType.CARD;
}
