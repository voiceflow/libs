import { DefaultNode, DefaultStep, NodeType } from './types';

export enum CardType {
  SIMPLE = 'Simple',
  STANDARD = 'Standard',
}

export type Card = {
  type: CardType;
  title: string;
  text: string;
  image?: {
    largeImageUrl?: string;
    smallImageUrl?: string;
  };
};

export type StepData = Card;

export type NodeData = {
  card: Card;
  nextId?: string;
};

export type Step = DefaultStep<NodeType.CARD, StepData>;
export type Node = DefaultNode<NodeType.CARD, NodeData>;
