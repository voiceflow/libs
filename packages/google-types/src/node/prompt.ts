/* eslint-disable @typescript-eslint/no-empty-interface */

import { Button } from '@voiceflow/base-types';
import { Node } from '@voiceflow/voice-types';

import { Voice } from '@/constants';

export interface StepData extends Node.Prompt.StepData<Voice>, Button.StepButton {}

export interface Step extends Node.Prompt.Step<StepData> {}
