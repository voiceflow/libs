import { Node } from '@voiceflow/voice-types';

import { Voice } from '@/constants';

export interface StepData extends Node.Prompt.StepData<Voice> {}

export interface Step extends Node.Prompt.Step<StepData> {}
