/* eslint-disable @typescript-eslint/no-empty-interface */

import { Button, Node } from '@voiceflow/base-types';

import { StepNoMatch, StepReprompt } from './utils';

export interface StepData extends Node.Prompt.StepData, Button.StepButton, StepReprompt {
  noMatches: StepNoMatch;
}

export interface Step extends Node.Prompt.Step<StepData> {}
