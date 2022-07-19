import { SlateTextValue } from '@base-types/text';
import { Nullable } from '@voiceflow/common';

import { NodeType } from './constants';
import { BaseNoMatchStepData, BaseNoReplyStepData, BaseStep, BaseStepPorts, BuiltInNextPort, BuiltInNoMatchNoReplyPorts, DataID } from './utils';

export interface CardV2Button extends DataID {
  name: string;
  intent?: Nullable<string>;
}

export interface CardV2Card<B = CardV2Button> extends DataID {
  imageUrl: string | null;
  title: string;
  description: SlateTextValue;
  buttons: B[];
}

export interface StepBuiltInPorts extends BuiltInNextPort, BuiltInNoMatchNoReplyPorts {}

export interface StepPorts extends BaseStepPorts<StepBuiltInPorts, []> {}

export interface StepData extends BaseNoMatchStepData, BaseNoReplyStepData {
  card: CardV2Card;
}

export interface Step<Data = StepData> extends BaseStep<Data, StepPorts> {
  type: NodeType.CARD_V2;
}
