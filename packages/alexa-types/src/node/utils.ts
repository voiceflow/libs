/* eslint-disable @typescript-eslint/no-empty-interface */

import { Nullable } from '@voiceflow/api-sdk';
import { Node } from '@voiceflow/base-types';
import { Prompt } from '@voiceflow/general-types';

import { Voice } from '@/constants';

export interface StepReprompt extends Node.Utils.StepReprompt<Nullable<Prompt<Voice>>> {}

export interface NodeReprompt extends Node.Utils.NodeReprompt<string> {}

export interface StepNoMatch extends Node.Utils.StepNoMatch<Prompt<Voice>> {}

export interface NodeNoMatch extends Node.Utils.NodeNoMatch<string> {}
