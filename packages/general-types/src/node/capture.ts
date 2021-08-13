/* eslint-disable @typescript-eslint/no-empty-interface */

import { Button, Node, Request } from '@voiceflow/base-types';

import { NodeReprompt, StepReprompt } from './utils';

export interface StepData extends Node.Capture.StepData, Button.StepButton, StepReprompt {}

export interface Step extends Node.Capture.Step<StepData> {}

export interface Node extends Node.Capture.Node, Request.NodeButton, NodeReprompt {}
