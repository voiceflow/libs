import { NodePath } from './_v1';
import { NodeType, PortType } from './constants';
import { BaseNode, BasePort, BasePortList, BaseStep, BaseStepPorts, ExpressionData, NodeElseID } from './utils';

export enum IfNoMatchType {
  PATH = 'path',
  NONE = 'none',
}

export interface IfNoMatch {
  type: IfNoMatchType;
  pathName?: string;
}

export interface StepData {
  expressions: ExpressionData[];
  noMatch?: IfNoMatch;
}

export interface StepPorts extends BaseStepPorts<{ [PortType.NO_MATCH]?: BasePort }, BasePort[]> {}

export interface Step<Data = StepData> extends BaseStep<Data, BasePortList, StepPorts> {
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
