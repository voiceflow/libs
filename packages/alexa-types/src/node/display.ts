import { Node } from '@voiceflow/base-types';

import { NodeType } from './constants';

export interface StepData extends Omit<Node.Visual.APLStepData, 'visualType' | 'aplType'> {
  type: Node.Visual.APLType;
}

export interface Step extends Node.Utils.BaseStep<StepData> {
  type: NodeType.DISPLAY;
}

export interface Node extends Node.Utils.BaseNode, Node.Utils.NodeRequiredNextID {
  type: NodeType.DISPLAY;
  datasource: string;
  document: string;
  aplCommands?: string;
}
