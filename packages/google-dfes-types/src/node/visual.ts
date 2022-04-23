import { BaseNode } from '@voiceflow/base-types';

export interface Step extends BaseNode.Visual.Step<BaseNode.Visual.StepData> {}

export interface Node extends BaseNode.Visual.Node {
  data: BaseNode.Visual.StepData;
}
