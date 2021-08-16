/* eslint-disable @typescript-eslint/no-empty-interface */

import { Node } from '@voiceflow/base-types';

import { NodeReprompt, StepReprompt } from './utils';

export interface StepData<Voice> extends Node.Capture.StepData, StepReprompt<Voice> {}

export interface Step<Voice> extends Node.Capture.Step<StepData<Voice>> {}

export interface Node extends Node.Capture.Node, NodeReprompt {}
