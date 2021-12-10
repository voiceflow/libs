/* eslint-disable @typescript-eslint/no-empty-interface */

import { Button, Request } from '@voiceflow/base-types';
import { Node } from '@voiceflow/voice-types';

import { Voice } from '@/constants';

export interface StepData extends Node.Capture.StepData<Voice>, Button.StepButton {}

/** @deprecated */
export interface Step extends Node.Capture.Step<StepData> {}

/** @deprecated */
export interface Node extends Node.Capture.Node, Request.NodeButton {}
