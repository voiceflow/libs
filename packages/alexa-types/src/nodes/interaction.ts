import { Nullable } from '@voiceflow/api-sdk';
import { NodeID } from '@voiceflow/general-types';
import { ElseType, StepData as GeneralStepData } from '@voiceflow/general-types/build/nodes/interaction';
import { DataWithMappings } from '@voiceflow/general-types/build/nodes/types';

import { Voice } from '@/types';

import { BaseNode, BaseStep, NodeType } from './types';

export { ElseType };

export type StepData = Omit<GeneralStepData<Voice>, 'chips' | 'buttons' | 'buttonsLayout'>;

export interface Interaction extends DataWithMappings {
  intent: string;
  nextIdIndex?: number;
}

export interface Step extends BaseStep<StepData> {
  type: NodeType.INTERACTION;
}

export interface Node extends BaseNode {
  type: NodeType.INTERACTION;
  elseId?: NodeID;
  nextIds: Nullable<string>[];
  reprompt?: string;
  noMatches?: string[];
  randomize?: boolean;
  interactions: Interaction[];
}
