/* eslint-disable @typescript-eslint/no-empty-interface */

import { Node } from '@voiceflow/base-types';

import { NodeNoMatch, NodeReprompt, StepNoMatch, StepReprompt } from './utils';

export interface StepData extends Node.Interaction.StepData, StepReprompt {
  else: StepNoMatch;
}

export interface Step extends Node.Interaction.Step<StepData> {}

export interface Interaction extends Node.Utils.SlotMappings {
  intent: string;
  nextIdIndex?: number;
}

export interface Node extends Omit<Node.Interaction.Node, 'interactions'>, NodeNoMatch, NodeReprompt, Node.Utils.NodeNextIDs {
  interactions: Interaction[];
}
