import { Nullable } from '@voiceflow/common';

import { NodeType } from './constants';
import { BaseNoMatchStepData, BaseNoReplyStepData, BaseStep, BaseStepPorts, BuiltInNextPort, BuiltInNoMatchNoReplyPorts, DataID } from './utils';

export interface CardV2Button extends DataID {
  name: string;
  intent?: Nullable<string>;
}

export interface StepBuiltInPorts extends BuiltInNextPort, BuiltInNoMatchNoReplyPorts {}

export interface StepPorts extends BaseStepPorts<StepBuiltInPorts, []> {}

export interface StepData<Button extends CardV2Button = CardV2Button> extends BaseNoMatchStepData, BaseNoReplyStepData {
  title: string;
  buttons: Button[];
  imageUrl: string | null;
}

export interface Step<Data = StepData> extends BaseStep<Data, StepPorts> {
  type: NodeType.CARD_V2;
}
