import { Node } from '@voiceflow/base-types';

export interface Step extends Node.Visual.Step<Node.Visual.ImageStepData> {}

export interface Node extends Node.Visual.Node {
  data: Node.Visual.ImageStepData;
}
