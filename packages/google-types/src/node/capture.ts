/* eslint-disable @typescript-eslint/no-empty-interface */

import { Button } from '@voiceflow/base-types';
import { Node } from '@voiceflow/voice-types';

import { Voice } from '@/constants';

import { ButtonNode } from './buttons';

export interface StepData extends Node.Capture.StepData<Voice>, Button.StepButton {}

export interface Step extends Node.Capture.Step<StepData> {}

export interface Node extends Node.Capture.Node {
  buttons?: ButtonNode[];
}
