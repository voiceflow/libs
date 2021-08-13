/* eslint-disable @typescript-eslint/no-empty-interface */

import { Node } from '@voiceflow/base-types';

import { StepNoMatch, StepReprompt } from './utils';

export interface StepData<V> extends Node.Prompt.StepData, StepReprompt<V> {
  noMatches: StepNoMatch<V>;
}

export interface Step<V> extends Node.Prompt.Step<StepData<V>> {}
