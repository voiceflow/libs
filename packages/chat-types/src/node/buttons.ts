import { BaseNode, Nullable } from '@voiceflow/base-types';

import { StepNoMatch, StepNoReply, StepReprompt } from './utils';

export interface StepData extends BaseNode.Buttons.StepData, StepReprompt {
  else: StepNoMatch;
  noReply?: Nullable<StepNoReply>;
}

export interface Step<Data = StepData> extends BaseNode.Buttons.Step<Data> {}
