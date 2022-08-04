import { Nullable } from '@voiceflow/common';

import { NodeType } from './constants';
import {
  BaseNode,
  BaseNoMatchStepData,
  BaseNoReplyStepData,
  BaseStep,
  BaseStepPorts,
  BuiltInNextPort,
  BuiltInNoMatchNoReplyPorts,
  DataID,
  NodeNextID,
} from './utils';

export interface CardV2Button extends DataID {
  name: string;
  intent?: Nullable<string>;
}

export interface CardV2Card<Button extends CardV2Button = CardV2Button> extends DataID {
  title: string;
  buttons: Button[];
  imageUrl: string | null;
}

export interface StepBuiltInPorts extends BuiltInNextPort, BuiltInNoMatchNoReplyPorts {}

export interface StepPorts extends BaseStepPorts<StepBuiltInPorts, []> {}

export interface StepData extends BaseNoMatchStepData, BaseNoReplyStepData {
  card: CardV2Card;
}

export interface Step<Data = StepData> extends BaseStep<Data, StepPorts> {
  type: NodeType.CARD_V2;
}
