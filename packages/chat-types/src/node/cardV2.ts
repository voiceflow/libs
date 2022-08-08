import { BaseNode, BaseText, Nullable } from '@voiceflow/base-types';

import { StepNoMatch, StepNoReply } from './utils';

export interface StepData extends BaseNode.CardV2.StepData, BaseNode.CardV2.StepData {
  description: BaseText.SlateTextValue;
  noReply?: Nullable<StepNoReply>;
  noMatch?: Nullable<StepNoMatch>;
}
export interface Step<Data = StepData> extends BaseNode.CardV2.Step<Data> {}
