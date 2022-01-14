import { Node, Nullable } from '@voiceflow/base-types';

import { StepNoMatch, StepNoReply, StepReprompt } from './utils';

export interface StepData extends Node.Buttons.StepData, StepReprompt {
  else: StepNoMatch;
  noReply?: Nullable<StepNoReply>;
}

export interface Step<Data = StepData> extends Node.Buttons.Step<Data> {}
