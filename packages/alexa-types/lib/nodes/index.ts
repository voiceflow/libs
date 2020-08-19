import { FlowNode, FlowStep } from './flow';
import { SpeakNode, SpeakStep } from './speak';

export * from './types';

export namespace AlexaStep {
  export type Speak = SpeakStep;
  export type Flow = FlowStep;
}

export namespace AlexaNode {
  export type Speak = SpeakNode;
  export type Flow = FlowNode;
}

export type AlexaSteps = AlexaStep.Speak | AlexaStep.Flow;

export type AlexaNodes = AlexaNode.Speak | AlexaNode.Flow;
