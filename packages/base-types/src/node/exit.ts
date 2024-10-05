import type { Struct } from '@voiceflow/common';

import type { NodeType } from './constants';
import type { BaseNode, BaseStep, EmptyStepPorts } from './utils';

export type StepData = Struct;

export interface NodeData {
  end: true;
}

export interface StepPorts extends EmptyStepPorts {}

export interface Step<Data = StepData> extends BaseStep<Data, [], StepPorts> {
  type: NodeType.EXIT;
}

export interface Node extends BaseNode {
  type: NodeType.EXIT;
  end: true;
}
