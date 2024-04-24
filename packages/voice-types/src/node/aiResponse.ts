import type { BaseNode } from '@voiceflow/base-types';

export interface StepData<Voice> extends BaseNode.AIResponse.StepData {
  voice?: Voice;
}

export interface Step<Data = StepData<string>> extends BaseNode.AIResponse.Step<Data> {}

export interface Node extends BaseNode.AIResponse.Node {
  voice?: string;
}
