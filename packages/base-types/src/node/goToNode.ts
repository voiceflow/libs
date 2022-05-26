import { Nullable } from '@voiceflow/common';

import { NodeType } from './constants';
import { BaseNode, BaseStep, NodeNextID } from './utils';

export interface StepData {
  nodeID: Nullable<string>;
  diagramID: Nullable<string>;
}

export interface Step<Data = StepData> extends BaseStep<Data> {
  type: NodeType.GOTO_NODE;
}

export interface Node extends BaseNode, NodeNextID {
  type: NodeType.GOTO_NODE;
  diagramID: Nullable<string>;
}
