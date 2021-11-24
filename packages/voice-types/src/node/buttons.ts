/* eslint-disable @typescript-eslint/no-empty-interface */

import { Node, Nullable } from '@voiceflow/base-types';

import { StepNoMatch, StepNoReply, StepReprompt } from './utils';

export interface StepData<Voice> extends Node.Buttons.StepData, StepReprompt<Voice> {
  else: StepNoMatch<Voice>;
  noReply?: Nullable<StepNoReply<Voice>>;
}

export interface Step<Data = StepData<unknown>> extends Node.Buttons.Step<Data> {}
