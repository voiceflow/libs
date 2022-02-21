import { BaseNode, Nullable } from '@voiceflow/base-types';

import { StepNoMatch, StepNoReply, StepReprompt } from './utils';

export interface StepData<Voice> extends BaseNode.Prompt.StepData, StepReprompt<Voice> {
  noReply?: Nullable<StepNoReply<Voice>>;
  noMatch?: Nullable<StepNoMatch<Voice>>;

  /**
   * @deprecated use noMatch instead
   */
  noMatches?: StepNoMatch<Voice>;
}

export interface Step<Data = StepData<unknown>> extends BaseNode.Prompt.Step<Data> {}
