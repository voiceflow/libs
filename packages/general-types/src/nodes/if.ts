import { Nullable } from '@voiceflow/api-sdk';

import { BaseNode, BaseStep, Expression, NodeID, NodeType } from './types';

export interface StepData {
  expressions: Expression[];
}

export interface Step extends BaseStep<StepData> {
  type: NodeType.IF;
}

export interface Node extends BaseNode {
  type: NodeType.IF;
  elseId?: NodeID;
  nextIds: Nullable<string>[];
  expressions: (string | number)[];
}
