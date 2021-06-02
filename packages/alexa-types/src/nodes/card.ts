import { Card as GeneralCard, CardType } from '@voiceflow/general-types/build/nodes/card';

import { BaseNode, BaseStep, NodeType } from './types';

export { CardType, GeneralCard };

export type Card = GeneralCard;

export type StepData = Card;

export interface Step extends BaseStep<StepData> {
  type: NodeType.CARD;
}

export interface Node extends BaseNode {
  type: NodeType.CARD;
  card: Card;
  nextId?: string;
}
