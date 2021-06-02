import { BaseNode, BaseStep, NodeType } from './types';

export enum CardType {
  SIMPLE = 'Simple',
  STANDARD = 'Standard',
}

export interface Card {
  type: CardType;
  title: string;
  text: string;
  image?: {
    largeImageUrl?: string;
    smallImageUrl?: string;
  };
}

export type StepData = Card;

export interface Step extends BaseStep<StepData> {
  type: NodeType.CARD;
}

export interface Node extends BaseNode {
  type: NodeType.CARD;
  card: Card;
  nextId?: string;
}
