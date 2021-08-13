/* eslint-disable @typescript-eslint/no-empty-interface */

import { Node } from '@voiceflow/base-types';

import { NodeReprompt, StepReprompt } from './utils';

export interface StepData extends Node.Capture.StepData, StepReprompt {}

export interface Step extends Node.Capture.Step<StepData> {}

export interface Node extends Node.Capture.Node, NodeReprompt {}
