/* eslint-disable @typescript-eslint/no-empty-interface */

import { Node } from '@voiceflow/base-types';

import { StepNoMatch, StepReprompt } from './utils';

export interface StepData<Voice> extends Node.Buttons.StepData, StepReprompt<Voice> {
  else: StepNoMatch<Voice>;
}

export interface Step<Data = StepData<unknown>> extends Node.Buttons.Step<Data> {}
