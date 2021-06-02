import { Nullable } from '@voiceflow/api-sdk';

import { BaseEvent, BaseNode, BaseStep, ExpressionData, NodeID, NodeType } from './types';

export interface StepData {
  expressions: ExpressionData[];
}

export interface Step extends BaseStep<StepData> {
  type: NodeType.IF_V2;
}

export interface NodePath {
  event?: BaseEvent;
  nextID: Nullable<NodeID>;
}

export interface Node extends BaseNode {
  type: NodeType.IF_V2;
  payload: {
    elseId?: NodeID;
    expressions: (string | number)[];
  };
  paths: NodePath[];
}
