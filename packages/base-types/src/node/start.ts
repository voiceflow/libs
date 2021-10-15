import { NodeType } from './constants';
import { BaseNode, BaseStep, NodeID } from './utils';

export interface StepData {
  label?: string;
}

export interface Step<Data = StepData> extends BaseStep<Data> {
  type: NodeType.START;
}

export interface Node extends BaseNode {
  type: NodeType.START;
  nextId?: NodeID;
}
