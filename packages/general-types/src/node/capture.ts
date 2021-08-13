/* eslint-disable @typescript-eslint/no-empty-interface */

import { Node } from '@voiceflow/base-types';

import { NodeReprompt, StepReprompt } from './utils';

export interface StepData<V> extends Node.Capture.StepData, StepReprompt<V> {}

export interface Step<V> extends Node.Capture.Step<StepData<V>> {}

export interface Node extends Node.Capture.Node, NodeReprompt {}
