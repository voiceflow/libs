/* eslint-disable @typescript-eslint/no-empty-interface */

import { Button, Request } from '@voiceflow/base-types';
import { Node } from '@voiceflow/voice-types';

import { Voice } from '@/constants';

export interface StepData extends Node.CaptureV2.StepData<Voice>, Button.StepButton {}

export interface Step extends Node.CaptureV2.Step<StepData> {}

export interface Node extends Node.CaptureV2.Node, Request.NodeButton {}
