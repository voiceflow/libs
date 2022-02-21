import { BaseNode, Nullable } from '@voiceflow/base-types';

import { StepNoMatch, StepNoReply, StepReprompt } from './utils';

export interface StepData extends BaseNode.Buttons.StepData, StepReprompt {
  noReply?: Nullable<StepNoReply>;
  noMatch?: Nullable<StepNoMatch>;

  /**
   * @deprecated use noMatch instead
   */
  else?: StepNoMatch;
}

export interface Step<Data = StepData> extends BaseNode.Buttons.Step<Data> {}
