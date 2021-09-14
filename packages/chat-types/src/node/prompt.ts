/* eslint-disable @typescript-eslint/no-empty-interface */

import { Button, Node } from '@voiceflow/base-types';

import { StepNoMatch, StepReprompt } from './utils';

export interface StepData extends Node.Prompt.StepData, StepReprompt, Button.StepButton {
  noMatches: StepNoMatch;
}

export interface Step<Data = StepData> extends Node.Prompt.Step<Data> {}
