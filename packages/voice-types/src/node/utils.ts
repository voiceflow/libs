/* eslint-disable @typescript-eslint/no-empty-interface */

import { Node } from '@voiceflow/base-types';

import { Prompt } from '@/types';

export interface StepReprompt<Voice> extends Node.Utils.StepReprompt<Prompt<Voice>> {}

export interface NodeReprompt extends Node.Utils.NodeReprompt<string> {}

export interface StepNoMatch<Voice> extends Node.Utils.StepNoMatch<Prompt<Voice>> {}

export interface NodeNoMatch extends Node.Utils.NodeNoMatch<string> {}
