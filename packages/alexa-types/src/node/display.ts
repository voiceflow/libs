import type { BaseNode } from '@voiceflow/base-types';

import type { NodeType } from './constants';

export interface StepData extends Omit<BaseNode.Visual.APLStepData, 'visualType' | 'aplType'> {
  type: BaseNode.Visual.APLType;
}

export interface Step extends BaseNode.Utils.BaseStep<StepData> {
  type: NodeType.DISPLAY;
}

export interface Node extends BaseNode.Utils.BaseNode, BaseNode.Utils.NodeRequiredNextID {
  type: NodeType.DISPLAY;
  datasource: string;
  document: string;
  aplCommands?: string;
}
