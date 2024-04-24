import type { EmptyObject, Nullable } from '@voiceflow/common';

import type { NodeType } from './constants';
import type { BaseNode, BaseStep, NodeNextID } from './utils';

export interface StepData {
  nodeID: Nullable<string>;
  diagramID: Nullable<string>;
}

export interface Step<Data = StepData> extends BaseStep<Data, EmptyObject, []> {
  type: NodeType.GOTO_NODE;
}

export interface Node extends BaseNode, NodeNextID {
  type: NodeType.GOTO_NODE;
  diagramID: Nullable<string>;
}
