import { NodeType } from './constants';
import { BaseNode, BaseStep, NodeNextID, NodeSuccessFailID, SuccessFailStepPorts } from './utils';

export interface CodePath {
  key: string;
  label: string;
}

// actions have no paths
export interface StepData {
  code: string;
  paths?: CodePath[];
}

export interface StepPorts extends SuccessFailStepPorts<[]> {}

export interface Step<Data = StepData> extends BaseStep<Data, StepPorts> {
  type: NodeType.CODE;
}

export interface NodeCodePath extends CodePath, NodeNextID {}

export interface Node extends BaseNode, NodeSuccessFailID {
  type: NodeType.CODE;
  code: string;
  paths?: NodeCodePath[];
}
