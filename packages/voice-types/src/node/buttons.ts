import { BaseNode, Nullable } from '@voiceflow/base-types';

import { StepNoMatch, StepNoReply, StepReprompt } from './utils';

export interface StepData<Voice> extends BaseNode.Buttons.StepData, StepReprompt<Voice> {
  else: StepNoMatch<Voice>;
  noReply?: Nullable<StepNoReply<Voice>>;
}

export interface Step<Data = StepData<unknown>> extends BaseNode.Buttons.Step<Data> {}
