import { BaseNode } from '@voiceflow/base-types';

export interface Step extends BaseNode.Visual.Step<BaseNode.Visual.ImageStepData> {}

export interface Node extends BaseNode.Visual.Node {
  data: BaseNode.Visual.ImageStepData;
}
