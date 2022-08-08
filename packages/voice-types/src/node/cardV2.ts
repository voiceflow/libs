import { BaseNode, Nullable } from '@voiceflow/base-types';

import { StepNoMatch, StepNoReply } from './utils';

export interface StepData<Voice> extends BaseNode.CardV2.StepData {
  description: string;
  noReply?: Nullable<StepNoReply<Voice>>;
  noMatch?: Nullable<StepNoMatch<Voice>>;
}

export interface Step<Data = StepData<unknown>> extends BaseNode.CardV2.Step<Data> {}
