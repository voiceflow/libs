/* eslint-disable @typescript-eslint/no-empty-interface */

import { Button, Node, Nullable } from '@voiceflow/base-types';

import { StepNoMatch, StepNoReply, StepReprompt } from './utils';

export interface StepData extends Node.Prompt.StepData, Button.StepButton, StepReprompt {
  noReply?: Nullable<StepNoReply>;
  noMatches: StepNoMatch;
}

export interface Step<Data = StepData> extends Node.Prompt.Step<Data> {}
