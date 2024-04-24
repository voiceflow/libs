import type { BaseButton, BaseNode, Nullable } from '@voiceflow/base-types';

import type { StepNoMatch, StepNoReply, StepReprompt } from './utils';

export interface StepData extends BaseNode.Prompt.StepData, BaseButton.StepButton, StepReprompt {
  noReply?: Nullable<StepNoReply>;
  noMatch?: Nullable<StepNoMatch>;

  /**
   * @deprecated use noMatch instead
   */
  noMatches?: StepNoMatch;
}

export interface Step<Data = StepData> extends BaseNode.Prompt.Step<Data> {}
