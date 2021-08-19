/* eslint-disable @typescript-eslint/no-empty-interface */

import { Node, Text } from '@voiceflow/base-types';

import { Prompt } from '@/types';

export interface StepReprompt extends Node.Utils.StepReprompt<Prompt> {}

export interface NodeReprompt extends Node.Utils.NodeReprompt<Text.SlateTextValue> {}

export interface StepNoMatch extends Node.Utils.StepNoMatch<Prompt> {}

export interface NodeNoMatch extends Node.Utils.NodeNoMatch<Text.SlateTextValue> {}
