import { NodeType } from './constants';
import { BaseNode, BasePortList, BaseStep, NodeSuccessFailID, SuccessFailStepPorts } from './utils';

export interface StepData {
  code: string;
}

export type StepPorts = SuccessFailStepPorts;

export interface Step<Data = StepData> extends BaseStep<Data, BasePortList, StepPorts> {
  type: NodeType.CODE;
}

export interface Node extends BaseNode, NodeSuccessFailID {
  type: NodeType.CODE;
  code: string;
}
