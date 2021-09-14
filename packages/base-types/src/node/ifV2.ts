import { NodeType } from './constants';
import { BaseEvent, BaseNode, BaseStep, BaseStepNoMatch, ExpressionData, NodeElseID, NodeID } from './utils';

export interface StepData {
  expressions: ExpressionData[];
  noMatch?: BaseStepNoMatch;
}

export interface Step<Data = StepData> extends BaseStep<Data> {
  type: NodeType.IF_V2;
}

export interface NodePath {
  event?: BaseEvent;
  nextID: NodeID;
}

export interface NodePayload extends NodeElseID {
  expressions: (string | number)[];
}

export interface Node extends BaseNode {
  type: NodeType.IF_V2;
  paths: NodePath[];
  payload: NodePayload;
}
