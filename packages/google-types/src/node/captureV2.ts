import { Node } from '@voiceflow/voice-types';

import { Voice } from '@/constants';

export interface StepData extends Node.CaptureV2.StepData<Voice> {}

export interface Step extends Node.CaptureV2.Step<StepData> {}

export interface Node extends Node.CaptureV2.Node {}
