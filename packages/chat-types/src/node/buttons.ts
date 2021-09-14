/* eslint-disable @typescript-eslint/no-empty-interface */

import { Node } from '@voiceflow/base-types';

import { StepNoMatch, StepReprompt } from './utils';

export interface StepData extends Node.Buttons.StepData, StepReprompt {
  else: StepNoMatch;
}

export interface Step<Data = StepData> extends Node.Buttons.Step<Data> {}
