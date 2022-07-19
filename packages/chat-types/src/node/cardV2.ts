import { BaseNode, Nullable } from '@voiceflow/base-types';

import { StepNoMatch, StepNoReply } from './utils';

export interface StepData extends BaseNode.CardV2.StepData {
  noReply?: Nullable<StepNoReply>;
  noMatch?: Nullable<StepNoMatch>;
}

export interface Step<Data = StepData> extends BaseNode.CardV2.Step<Data> {}
