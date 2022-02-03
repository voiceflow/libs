import { BaseNode, Nullable } from '@voiceflow/base-types';

import { StepNoMatch, StepNoReply, StepReprompt } from './utils';

export interface StepData<Voice> extends BaseNode.Prompt.StepData, StepReprompt<Voice> {
  noReply?: Nullable<StepNoReply<Voice>>;
  noMatches: StepNoMatch<Voice>;
}

export interface Step<Data = StepData<unknown>> extends BaseNode.Prompt.Step<Data> {}
