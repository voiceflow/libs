import { NodeType } from './constants';
import { BaseNode, BaseStep, BaseStepNoMatch, Expression, NodeElseID, NodeNextIDs } from './utils';

export interface StepData {
  expressions: Expression[];
  noMatch: BaseStepNoMatch;
}

export interface Step<Data = StepData> extends BaseStep<Data> {
  type: NodeType.IF;
}

export interface Node extends BaseNode, NodeElseID, NodeNextIDs {
  type: NodeType.IF;
  expressions: (string | number)[];
}
