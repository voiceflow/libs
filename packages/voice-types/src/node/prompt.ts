/* eslint-disable @typescript-eslint/no-empty-interface */

import { Node } from '@voiceflow/base-types';

import { StepNoMatch, StepReprompt } from './utils';

export interface StepData<Voice> extends Node.Prompt.StepData, StepReprompt<Voice> {
  noMatches: StepNoMatch<Voice>;
}

export interface Step<Voice> extends Node.Prompt.Step<StepData<Voice>> {}
