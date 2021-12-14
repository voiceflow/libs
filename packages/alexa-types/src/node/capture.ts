/* eslint-disable @typescript-eslint/no-empty-interface */

import { Node } from '@voiceflow/voice-types';

import { Voice } from '@/constants';

/** @deprecated */
export interface StepData extends Node.Capture.StepData<Voice> {}

/** @deprecated */
export interface Step extends Node.Capture.Step<StepData> {}

/** @deprecated */
export interface Node extends Node.Capture.Node {}
