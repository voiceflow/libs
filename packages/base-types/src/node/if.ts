import { PortType } from '@base-types/models';

import { NodeType } from './constants';
import { BaseNode, BasePort, BasePortList, BaseStep, BaseStepPorts, Expression, NodeElseID, NodeNextIDs } from './utils';

export interface StepData {
  expressions: Expression[];
}

export interface StepPorts extends BaseStepPorts<{ [PortType.NO_MATCH]?: BasePort }, BasePort[]> {}

export interface Step<Data = StepData> extends BaseStep<Data, BasePortList, StepPorts> {
  type: NodeType.IF;
}

export interface Node extends BaseNode, NodeElseID, NodeNextIDs {
  type: NodeType.IF;
  expressions: (string | number)[];
}
