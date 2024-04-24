import type { NodeType } from './constants';
import type {
  BaseNode,
  BaseStep,
  BaseStepPorts,
  BuiltInNoMatchPort,
  Expression,
  NodeElseID,
  NodeNextIDs,
} from './utils';

export interface StepData {
  expressions: Expression[];
}

export interface StepPorts extends BaseStepPorts<BuiltInNoMatchPort> {}

export interface Step<Data = StepData> extends BaseStep<Data, StepPorts> {
  type: NodeType.IF;
}

export interface Node extends BaseNode, NodeElseID, NodeNextIDs {
  type: NodeType.IF;
  expressions: (string | number)[];
}
