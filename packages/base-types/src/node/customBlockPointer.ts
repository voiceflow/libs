import { NodeType } from './constants';
import { BaseNoMatchStepData, BaseNoReplyStepData, BaseStep, DynamicOnlyStepPorts } from './utils';

export interface StepPorts extends DynamicOnlyStepPorts {}

export interface StepData extends BaseNoMatchStepData, BaseNoReplyStepData {
  sourceID: string;
  pointerName: string;
  parameters: Record<string, string>;
}

export interface Step<Data = StepData> extends BaseStep<Data, StepPorts> {
  type: NodeType.CUSTOM_BLOCK_POINTER;
}
