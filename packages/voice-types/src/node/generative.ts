import { BaseNode } from '@voiceflow/base-types';

export interface StepData<Voice> extends BaseNode.Generative.StepData {
  voice?: Voice;
}

export interface Step<Data = StepData<string>> extends BaseNode.Generative.Step<Data> {}

export interface Node extends BaseNode.Generative.Node {
  voice?: string;
}
