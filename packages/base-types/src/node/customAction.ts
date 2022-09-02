import { NodeType } from './constants';
import { BaseNoMatchStepData, BaseNoReplyStepData, BaseStep, BaseStepPorts, BuiltInNextPort, BuiltInNoMatchNoReplyPorts } from './utils';

export interface StepBuiltInPorts extends BuiltInNextPort, BuiltInNoMatchNoReplyPorts {}

export interface StepPorts extends BaseStepPorts<StepBuiltInPorts> {}

export interface StepData extends BaseNoMatchStepData, BaseNoReplyStepData {
  name: string;
  payload: string;
  stop?: boolean;
  paths: { label: string }[];
  defaultPath?: number;
}

export interface Step<Data = StepData> extends BaseStep<Data, StepPorts> {
  type: NodeType.CUSTOM_ACTION;
}
