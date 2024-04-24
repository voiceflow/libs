import type { BaseNode, Nullable } from '@voiceflow/base-types';

import type { StepNoMatch, StepNoReply, StepReprompt } from './utils';

export interface StepData<Voice> extends BaseNode.Buttons.StepData, StepReprompt<Voice> {
  noReply?: Nullable<StepNoReply<Voice>>;
  noMatch?: Nullable<StepNoMatch<Voice>>;

  /**
   * @deprecated use noMatch instead
   */
  else?: StepNoMatch<Voice>;
}

export interface Step<Data = StepData<unknown>> extends BaseNode.Buttons.Step<Data> {}
