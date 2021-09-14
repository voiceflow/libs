/* eslint-disable @typescript-eslint/no-empty-interface */

import { Node } from '@voiceflow/voice-types';

import { Voice } from '@/constants';

export interface StepData extends Node.Buttons.StepData<Voice> {}

export interface Step extends Node.Capture.Step<StepData> {}
