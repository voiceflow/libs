import { NodePath } from './_v1';
import { NodeType } from './constants';
import { BaseNode, BaseStep, BaseStepNoMatch, ExpressionData, NodeElseID } from './utils';

export interface StepData {
  expressions: ExpressionData[];
  noMatch?: BaseStepNoMatch;
}

export interface Step<Data = StepData> extends BaseStep<Data> {
  type: NodeType.IF_V2;
}

export interface NodePayload extends NodeElseID {
  expressions: (string | number)[];
}

export interface Node extends BaseNode {
  type: NodeType.IF_V2;
  paths: NodePath[];
  payload: NodePayload;
}
