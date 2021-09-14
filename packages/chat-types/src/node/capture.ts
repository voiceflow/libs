/* eslint-disable @typescript-eslint/no-empty-interface */

import { Button, Node, Request } from '@voiceflow/base-types';

import { NodeReprompt, StepReprompt } from './utils';

export interface StepData extends Node.Capture.StepData, StepReprompt, Button.StepButton {}

export interface Step<Data = StepData> extends Node.Capture.Step<Data> {}

export interface Node extends Node.Capture.Node, NodeReprompt, Request.NodeButton {}
