import { BaseNode, BaseText, Nullable } from '@voiceflow/base-types';

import { StepNoMatch, StepNoReply } from './utils';

export interface CardV2Card extends BaseNode.CardV2.CardV2Card {
  description: BaseText.SlateTextValue;
}

export interface StepData<Voice> extends BaseNode.CardV2.StepData {
  card: CardV2Card;
  noReply?: Nullable<StepNoReply<Voice>>;
  noMatch?: Nullable<StepNoMatch<Voice>>;
}

export interface Step<Data = StepData<unknown>> extends BaseNode.CardV2.Step<Data> {}
