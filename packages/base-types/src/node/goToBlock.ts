import { Nullable } from '@base-types/types';

import { NodeType } from './constants';
import { BaseNode, BaseStep, NodeNextID } from './utils';

export interface StepData {
  blockID: Nullable<string>;
  diagramID: Nullable<string>;
}

export interface Step<Data = StepData> extends BaseStep<Data> {
  type: NodeType.GOTO_BLOCK;
}

export interface Node extends BaseNode, NodeNextID {
  type: NodeType.GOTO_BLOCK;
  diagramID: Nullable<string>;
}
