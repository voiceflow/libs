import { Nullable } from '@voiceflow/api-sdk';
import { StepData as GeneralStepData } from '@voiceflow/general-types/build/nodes/interaction';
import { DataWithMappings, NodeWithButtons, NodeWithNoMatches, NodeWithReprompt } from '@voiceflow/general-types/build/nodes/types';

import { Voice } from '@/types';

import { BaseNode, BaseStep, NodeType } from './types';

export type StepData = GeneralStepData<Voice>;

export interface Interaction extends DataWithMappings {
  intent: string;
  nextIdIndex?: number;
}

export interface Step extends BaseStep<StepData> {
  type: NodeType.INTERACTION;
}

export interface Node extends BaseNode, NodeWithButtons, NodeWithReprompt, NodeWithNoMatches {
  type: NodeType.INTERACTION;
  nextIds: Nullable<string>[];
  interactions: Interaction[];
}
