import { Node, Nullable } from '@voiceflow/base-types';

import { StepNoMatch, StepNoReply, StepReprompt } from './utils';

export interface StepData<Voice> extends Node.Prompt.StepData, StepReprompt<Voice> {
  noReply?: Nullable<StepNoReply<Voice>>;
  noMatches: StepNoMatch<Voice>;
}

export interface Step<Data = StepData<unknown>> extends Node.Prompt.Step<Data> {}
