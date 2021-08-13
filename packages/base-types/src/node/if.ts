import { NodeType } from './constants';
import { BaseNode, BaseStep, Expression, NodeElseID, NodeNextIDs } from './utils';

export interface StepData {
  expressions: Expression[];
}

export interface Step<D extends StepData = StepData> extends BaseStep<D> {
  type: NodeType.IF;
}

export interface Node extends BaseNode, NodeElseID, NodeNextIDs {
  type: NodeType.IF;
  expressions: (string | number)[];
}
