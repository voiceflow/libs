/* eslint-disable @typescript-eslint/no-empty-interface */

import { Nullable } from '@voiceflow/api-sdk';
import { Node } from '@voiceflow/base-types';

import { Prompt } from '@/types';

export interface StepReprompt<V> extends Node.Utils.StepReprompt<Nullable<Prompt<V>>> {}

export interface NodeReprompt extends Node.Utils.NodeReprompt<string> {}

export interface StepNoMatch<V> extends Node.Utils.StepNoMatch<Prompt<V>> {}

export interface NodeNoMatch extends Node.Utils.NodeNoMatch<string> {}
